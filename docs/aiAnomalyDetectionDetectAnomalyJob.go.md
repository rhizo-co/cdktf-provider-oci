# `aiAnomalyDetectionDetectAnomalyJob` Submodule <a name="`aiAnomalyDetectionDetectAnomalyJob` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDetectAnomalyJob <a name="AiAnomalyDetectionDetectAnomalyJob" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.NewAiAnomalyDetectionDetectAnomalyJob(scope Construct, id *string, config AiAnomalyDetectionDetectAnomalyJobConfig) AiAnomalyDetectionDetectAnomalyJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig">AiAnomalyDetectionDetectAnomalyJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig">AiAnomalyDetectionDetectAnomalyJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails">PutInputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails">PutOutputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetSensitivity">ResetSensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputDetails` <a name="PutInputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails"></a>

```go
func PutInputDetails(value AiAnomalyDetectionDetectAnomalyJobInputDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---

##### `PutOutputDetails` <a name="PutOutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails"></a>

```go
func PutOutputDetails(value AiAnomalyDetectionDetectAnomalyJobOutputDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts"></a>

```go
func PutTimeouts(value AiAnomalyDetectionDetectAnomalyJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetId"></a>

```go
func ResetId()
```

##### `ResetSensitivity` <a name="ResetSensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetSensitivity"></a>

```go
func ResetSensitivity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiAnomalyDetectionDetectAnomalyJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiAnomalyDetectionDetectAnomalyJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDetectAnomalyJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetails">InputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetails">OutputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference">AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetailsInput">InputDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetailsInput">OutputDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivityInput">SensitivityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivity">Sensitivity</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InputDetails`<sup>Required</sup> <a name="InputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetails"></a>

```go
func InputDetails() AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference</a>

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails"></a>

```go
func LifecycleStateDetails() *string
```

- *Type:* *string

---

##### `OutputDetails`<sup>Required</sup> <a name="OutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetails"></a>

```go
func OutputDetails() AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeouts"></a>

```go
func Timeouts() AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference">AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputDetailsInput`<sup>Optional</sup> <a name="InputDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetailsInput"></a>

```go
func InputDetailsInput() AiAnomalyDetectionDetectAnomalyJobInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `OutputDetailsInput`<sup>Optional</sup> <a name="OutputDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetailsInput"></a>

```go
func OutputDetailsInput() AiAnomalyDetectionDetectAnomalyJobOutputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---

##### `SensitivityInput`<sup>Optional</sup> <a name="SensitivityInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivityInput"></a>

```go
func SensitivityInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `Sensitivity`<sup>Required</sup> <a name="Sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivity"></a>

```go
func Sensitivity() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDetectAnomalyJobConfig <a name="AiAnomalyDetectionDetectAnomalyJobConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

&aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	InputDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails,
	ModelId: *string,
	OutputDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Sensitivity: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.inputDetails">InputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | input_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.outputDetails">OutputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | output_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.sensitivity">Sensitivity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}.

---

##### `InputDetails`<sup>Required</sup> <a name="InputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.inputDetails"></a>

```go
InputDetails AiAnomalyDetectionDetectAnomalyJobInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

input_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_details AiAnomalyDetectionDetectAnomalyJob#input_details}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}.

---

##### `OutputDetails`<sup>Required</sup> <a name="OutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.outputDetails"></a>

```go
OutputDetails AiAnomalyDetectionDetectAnomalyJobOutputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

output_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_details AiAnomalyDetectionDetectAnomalyJob#output_details}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sensitivity`<sup>Optional</sup> <a name="Sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.sensitivity"></a>

```go
Sensitivity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.timeouts"></a>

```go
Timeouts AiAnomalyDetectionDetectAnomalyJobTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timeouts AiAnomalyDetectionDetectAnomalyJob#timeouts}

---

### AiAnomalyDetectionDetectAnomalyJobInputDetails <a name="AiAnomalyDetectionDetectAnomalyJobInputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

&aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJobInputDetails {
	InputType: *string,
	Content: *string,
	ContentType: *string,
	Data: interface{},
	ObjectLocations: interface{},
	SignalNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.inputType">InputType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.data">Data</a></code> | <code>interface{}</code> | data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.objectLocations">ObjectLocations</a></code> | <code>interface{}</code> | object_locations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.signalNames">SignalNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}. |

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.inputType"></a>

```go
InputType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.data"></a>

```go
Data interface{}
```

- *Type:* interface{}

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#data AiAnomalyDetectionDetectAnomalyJob#data}

---

##### `ObjectLocations`<sup>Optional</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.objectLocations"></a>

```go
ObjectLocations interface{}
```

- *Type:* interface{}

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object_locations AiAnomalyDetectionDetectAnomalyJob#object_locations}

---

##### `SignalNames`<sup>Optional</sup> <a name="SignalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.signalNames"></a>

```go
SignalNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}.

---

### AiAnomalyDetectionDetectAnomalyJobInputDetailsData <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

&aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData {
	Timestamp: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.timestamp">Timestamp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.values">Values</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}. |

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.timestamp"></a>

```go
Timestamp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}.

---

### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

&aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations {
	Bucket: *string,
	Namespace: *string,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}.

---

### AiAnomalyDetectionDetectAnomalyJobOutputDetails <a name="AiAnomalyDetectionDetectAnomalyJobOutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

&aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJobOutputDetails {
	Bucket: *string,
	Namespace: *string,
	OutputType: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.outputType">OutputType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.outputType"></a>

```go
OutputType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}.

---

### AiAnomalyDetectionDetectAnomalyJobTimeouts <a name="AiAnomalyDetectionDetectAnomalyJobTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

&aianomalydetectiondetectanomalyjob.AiAnomalyDetectionDetectAnomalyJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.NewAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get"></a>

```go
func Get(index *f64) AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.NewAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimestamp` <a name="ResetTimestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetTimestamp"></a>

```go
func ResetTimestamp()
```

##### `ResetValues` <a name="ResetValues" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestampInput">TimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestampInput"></a>

```go
func TimestampInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.NewAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get"></a>

```go
func Get(index *f64) AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.NewAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetObject"></a>

```go
func ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.NewAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData">PutData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations">PutObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetObjectLocations">ResetObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetSignalNames">ResetSignalNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutData` <a name="PutData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData"></a>

```go
func PutData(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData.parameter.value"></a>

- *Type:* interface{}

---

##### `PutObjectLocations` <a name="PutObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations"></a>

```go
func PutObjectLocations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContent` <a name="ResetContent" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetData` <a name="ResetData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetObjectLocations` <a name="ResetObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetObjectLocations"></a>

```go
func ResetObjectLocations()
```

##### `ResetSignalNames` <a name="ResetSignalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetSignalNames"></a>

```go
func ResetSignalNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data">Data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations">ObjectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.dataInput">DataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputTypeInput">InputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocationsInput">ObjectLocationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNamesInput">SignalNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType">InputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames">SignalNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data"></a>

```go
func Data() AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `ObjectLocations`<sup>Required</sup> <a name="ObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations"></a>

```go
func ObjectLocations() AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.dataInput"></a>

```go
func DataInput() interface{}
```

- *Type:* interface{}

---

##### `InputTypeInput`<sup>Optional</sup> <a name="InputTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputTypeInput"></a>

```go
func InputTypeInput() *string
```

- *Type:* *string

---

##### `ObjectLocationsInput`<sup>Optional</sup> <a name="ObjectLocationsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocationsInput"></a>

```go
func ObjectLocationsInput() interface{}
```

- *Type:* interface{}

---

##### `SignalNamesInput`<sup>Optional</sup> <a name="SignalNamesInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNamesInput"></a>

```go
func SignalNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType"></a>

```go
func InputType() *string
```

- *Type:* *string

---

##### `SignalNames`<sup>Required</sup> <a name="SignalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames"></a>

```go
func SignalNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiAnomalyDetectionDetectAnomalyJobInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---


### AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.NewAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputTypeInput"></a>

```go
func OutputTypeInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AiAnomalyDetectionDetectAnomalyJobOutputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---


### AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/aianomalydetectiondetectanomalyjob"

aianomalydetectiondetectanomalyjob.NewAiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



