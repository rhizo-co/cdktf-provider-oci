# `aiAnomalyDetectionDataAsset` Submodule <a name="`aiAnomalyDetectionDataAsset` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDataAsset <a name="AiAnomalyDetectionDataAsset" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

aianomalydetectiondataasset.NewAiAnomalyDetectionDataAsset(scope Construct, id *string, config AiAnomalyDetectionDataAssetConfig) AiAnomalyDetectionDataAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig">AiAnomalyDetectionDataAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig">AiAnomalyDetectionDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails">PutDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId">ResetPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataSourceDetails` <a name="PutDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails"></a>

```go
func PutDataSourceDetails(value AiAnomalyDetectionDataAssetDataSourceDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts"></a>

```go
func PutTimeouts(value AiAnomalyDetectionDataAssetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateEndpointId` <a name="ResetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId"></a>

```go
func ResetPrivateEndpointId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

aianomalydetectiondataasset.AiAnomalyDetectionDataAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

aianomalydetectiondataasset.AiAnomalyDetectionDataAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

aianomalydetectiondataasset.AiAnomalyDetectionDataAsset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

aianomalydetectiondataasset.AiAnomalyDetectionDataAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiAnomalyDetectionDataAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiAnomalyDetectionDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails">DataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput">DataSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceDetails`<sup>Required</sup> <a name="DataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails"></a>

```go
func DataSourceDetails() AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts"></a>

```go
func Timeouts() AiAnomalyDetectionDataAssetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DataSourceDetailsInput`<sup>Optional</sup> <a name="DataSourceDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput"></a>

```go
func DataSourceDetailsInput() AiAnomalyDetectionDataAssetDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput"></a>

```go
func PrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDataAssetConfig <a name="AiAnomalyDetectionDataAssetConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

&aianomalydetectiondataasset.AiAnomalyDetectionDataAssetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DataSourceDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails,
	ProjectId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	PrivateEndpointId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails">DataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}.

---

##### `DataSourceDetails`<sup>Required</sup> <a name="DataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails"></a>

```go
DataSourceDetails AiAnomalyDetectionDataAssetDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_details AiAnomalyDetectionDataAsset#data_source_details}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateEndpointId`<sup>Optional</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId"></a>

```go
PrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts"></a>

```go
Timeouts AiAnomalyDetectionDataAssetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#timeouts AiAnomalyDetectionDataAsset#timeouts}

---

### AiAnomalyDetectionDataAssetDataSourceDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

&aianomalydetectiondataasset.AiAnomalyDetectionDataAssetDataSourceDetails {
	DataSourceType: *string,
	AtpPasswordSecretId: *string,
	AtpUserName: *string,
	Bucket: *string,
	CwalletFileSecretId: *string,
	DatabaseName: *string,
	EwalletFileSecretId: *string,
	KeyStoreFileSecretId: *string,
	MeasurementName: *string,
	Namespace: *string,
	Object: *string,
	OjdbcFileSecretId: *string,
	PasswordSecretId: *string,
	TableName: *string,
	TnsnamesFileSecretId: *string,
	TruststoreFileSecretId: *string,
	Url: *string,
	UserName: *string,
	VersionSpecificDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails,
	WalletPasswordSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId">AtpPasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName">AtpUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId">CwalletFileSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId">EwalletFileSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId">KeyStoreFileSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName">MeasurementName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId">OjdbcFileSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId">TnsnamesFileSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId">TruststoreFileSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails">VersionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | version_specific_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId">WalletPasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}. |

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType"></a>

```go
DataSourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}.

---

##### `AtpPasswordSecretId`<sup>Optional</sup> <a name="AtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId"></a>

```go
AtpPasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}.

---

##### `AtpUserName`<sup>Optional</sup> <a name="AtpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName"></a>

```go
AtpUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `CwalletFileSecretId`<sup>Optional</sup> <a name="CwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId"></a>

```go
CwalletFileSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `EwalletFileSecretId`<sup>Optional</sup> <a name="EwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId"></a>

```go
EwalletFileSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}.

---

##### `KeyStoreFileSecretId`<sup>Optional</sup> <a name="KeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId"></a>

```go
KeyStoreFileSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}.

---

##### `MeasurementName`<sup>Optional</sup> <a name="MeasurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName"></a>

```go
MeasurementName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}.

---

##### `OjdbcFileSecretId`<sup>Optional</sup> <a name="OjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId"></a>

```go
OjdbcFileSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId"></a>

```go
PasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}.

---

##### `TnsnamesFileSecretId`<sup>Optional</sup> <a name="TnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId"></a>

```go
TnsnamesFileSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}.

---

##### `TruststoreFileSecretId`<sup>Optional</sup> <a name="TruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId"></a>

```go
TruststoreFileSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}.

---

##### `VersionSpecificDetails`<sup>Optional</sup> <a name="VersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails"></a>

```go
VersionSpecificDetails AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

version_specific_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#version_specific_details AiAnomalyDetectionDataAsset#version_specific_details}

---

##### `WalletPasswordSecretId`<sup>Optional</sup> <a name="WalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId"></a>

```go
WalletPasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}.

---

### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

&aianomalydetectiondataasset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails {
	InfluxVersion: *string,
	Bucket: *string,
	DatabaseName: *string,
	OrganizationName: *string,
	RetentionPolicyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion">InfluxVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName">RetentionPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}. |

---

##### `InfluxVersion`<sup>Required</sup> <a name="InfluxVersion" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion"></a>

```go
InfluxVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}.

---

##### `RetentionPolicyName`<sup>Optional</sup> <a name="RetentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName"></a>

```go
RetentionPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}.

---

### AiAnomalyDetectionDataAssetTimeouts <a name="AiAnomalyDetectionDataAssetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

&aianomalydetectiondataasset.AiAnomalyDetectionDataAssetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

aianomalydetectiondataasset.NewAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails">PutVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId">ResetAtpPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName">ResetAtpUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId">ResetCwalletFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId">ResetEwalletFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId">ResetKeyStoreFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName">ResetMeasurementName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId">ResetOjdbcFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId">ResetTnsnamesFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId">ResetTruststoreFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails">ResetVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId">ResetWalletPasswordSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVersionSpecificDetails` <a name="PutVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails"></a>

```go
func PutVersionSpecificDetails(value AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `ResetAtpPasswordSecretId` <a name="ResetAtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId"></a>

```go
func ResetAtpPasswordSecretId()
```

##### `ResetAtpUserName` <a name="ResetAtpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName"></a>

```go
func ResetAtpUserName()
```

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetCwalletFileSecretId` <a name="ResetCwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId"></a>

```go
func ResetCwalletFileSecretId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetEwalletFileSecretId` <a name="ResetEwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId"></a>

```go
func ResetEwalletFileSecretId()
```

##### `ResetKeyStoreFileSecretId` <a name="ResetKeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId"></a>

```go
func ResetKeyStoreFileSecretId()
```

##### `ResetMeasurementName` <a name="ResetMeasurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName"></a>

```go
func ResetMeasurementName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject"></a>

```go
func ResetObject()
```

##### `ResetOjdbcFileSecretId` <a name="ResetOjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId"></a>

```go
func ResetOjdbcFileSecretId()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId"></a>

```go
func ResetPasswordSecretId()
```

##### `ResetTableName` <a name="ResetTableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetTnsnamesFileSecretId` <a name="ResetTnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId"></a>

```go
func ResetTnsnamesFileSecretId()
```

##### `ResetTruststoreFileSecretId` <a name="ResetTruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId"></a>

```go
func ResetTruststoreFileSecretId()
```

##### `ResetUrl` <a name="ResetUrl" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```

##### `ResetVersionSpecificDetails` <a name="ResetVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails"></a>

```go
func ResetVersionSpecificDetails()
```

##### `ResetWalletPasswordSecretId` <a name="ResetWalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId"></a>

```go
func ResetWalletPasswordSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails">VersionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput">AtpPasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput">AtpUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput">CwalletFileSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput">DataSourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput">EwalletFileSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput">KeyStoreFileSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput">MeasurementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput">OjdbcFileSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput">TnsnamesFileSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput">TruststoreFileSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput">VersionSpecificDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput">WalletPasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId">AtpPasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName">AtpUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId">CwalletFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId">EwalletFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId">KeyStoreFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName">MeasurementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId">OjdbcFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">TnsnamesFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId">TruststoreFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId">WalletPasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VersionSpecificDetails`<sup>Required</sup> <a name="VersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```go
func VersionSpecificDetails() AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a>

---

##### `AtpPasswordSecretIdInput`<sup>Optional</sup> <a name="AtpPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput"></a>

```go
func AtpPasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `AtpUserNameInput`<sup>Optional</sup> <a name="AtpUserNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput"></a>

```go
func AtpUserNameInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CwalletFileSecretIdInput`<sup>Optional</sup> <a name="CwalletFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput"></a>

```go
func CwalletFileSecretIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DataSourceTypeInput`<sup>Optional</sup> <a name="DataSourceTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput"></a>

```go
func DataSourceTypeInput() *string
```

- *Type:* *string

---

##### `EwalletFileSecretIdInput`<sup>Optional</sup> <a name="EwalletFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput"></a>

```go
func EwalletFileSecretIdInput() *string
```

- *Type:* *string

---

##### `KeyStoreFileSecretIdInput`<sup>Optional</sup> <a name="KeyStoreFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput"></a>

```go
func KeyStoreFileSecretIdInput() *string
```

- *Type:* *string

---

##### `MeasurementNameInput`<sup>Optional</sup> <a name="MeasurementNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput"></a>

```go
func MeasurementNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `OjdbcFileSecretIdInput`<sup>Optional</sup> <a name="OjdbcFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput"></a>

```go
func OjdbcFileSecretIdInput() *string
```

- *Type:* *string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput"></a>

```go
func PasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TnsnamesFileSecretIdInput`<sup>Optional</sup> <a name="TnsnamesFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput"></a>

```go
func TnsnamesFileSecretIdInput() *string
```

- *Type:* *string

---

##### `TruststoreFileSecretIdInput`<sup>Optional</sup> <a name="TruststoreFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput"></a>

```go
func TruststoreFileSecretIdInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `VersionSpecificDetailsInput`<sup>Optional</sup> <a name="VersionSpecificDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput"></a>

```go
func VersionSpecificDetailsInput() AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `WalletPasswordSecretIdInput`<sup>Optional</sup> <a name="WalletPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput"></a>

```go
func WalletPasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `AtpPasswordSecretId`<sup>Required</sup> <a name="AtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```go
func AtpPasswordSecretId() *string
```

- *Type:* *string

---

##### `AtpUserName`<sup>Required</sup> <a name="AtpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName"></a>

```go
func AtpUserName() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CwalletFileSecretId`<sup>Required</sup> <a name="CwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```go
func CwalletFileSecretId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType"></a>

```go
func DataSourceType() *string
```

- *Type:* *string

---

##### `EwalletFileSecretId`<sup>Required</sup> <a name="EwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```go
func EwalletFileSecretId() *string
```

- *Type:* *string

---

##### `KeyStoreFileSecretId`<sup>Required</sup> <a name="KeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```go
func KeyStoreFileSecretId() *string
```

- *Type:* *string

---

##### `MeasurementName`<sup>Required</sup> <a name="MeasurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName"></a>

```go
func MeasurementName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `OjdbcFileSecretId`<sup>Required</sup> <a name="OjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```go
func OjdbcFileSecretId() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TnsnamesFileSecretId`<sup>Required</sup> <a name="TnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```go
func TnsnamesFileSecretId() *string
```

- *Type:* *string

---

##### `TruststoreFileSecretId`<sup>Required</sup> <a name="TruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```go
func TruststoreFileSecretId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `WalletPasswordSecretId`<sup>Required</sup> <a name="WalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```go
func WalletPasswordSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiAnomalyDetectionDataAssetDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---


### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

aianomalydetectiondataasset.NewAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName">ResetRetentionPolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetRetentionPolicyName` <a name="ResetRetentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName"></a>

```go
func ResetRetentionPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput">InfluxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput">RetentionPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">InfluxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">RetentionPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `InfluxVersionInput`<sup>Optional</sup> <a name="InfluxVersionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput"></a>

```go
func InfluxVersionInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `RetentionPolicyNameInput`<sup>Optional</sup> <a name="RetentionPolicyNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput"></a>

```go
func RetentionPolicyNameInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `InfluxVersion`<sup>Required</sup> <a name="InfluxVersion" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```go
func InfluxVersion() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `RetentionPolicyName`<sup>Required</sup> <a name="RetentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```go
func RetentionPolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---


### AiAnomalyDetectionDataAssetTimeoutsOutputReference <a name="AiAnomalyDetectionDataAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondataasset"

aianomalydetectiondataasset.NewAiAnomalyDetectionDataAssetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiAnomalyDetectionDataAssetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



