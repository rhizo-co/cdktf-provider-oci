# `logAnalyticsLogAnalyticsEntity` Submodule <a name="`logAnalyticsLogAnalyticsEntity` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsEntity <a name="LogAnalyticsLogAnalyticsEntity" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity oci_log_analytics_log_analytics_entity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.NewLogAnalyticsLogAnalyticsEntity(scope Construct, id *string, config LogAnalyticsLogAnalyticsEntityConfig) LogAnalyticsLogAnalyticsEntity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig">LogAnalyticsLogAnalyticsEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig">LogAnalyticsLogAnalyticsEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetCloudResourceId">ResetCloudResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetManagementAgentId">ResetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetSourceId">ResetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeLastDiscovered">ResetTimeLastDiscovered</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimezoneRegion">ResetTimezoneRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata"></a>

```go
func PutMetadata(value LogAnalyticsLogAnalyticsEntityMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsLogAnalyticsEntityTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

---

##### `ResetCloudResourceId` <a name="ResetCloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetCloudResourceId"></a>

```go
func ResetCloudResourceId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHostname` <a name="ResetHostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetId"></a>

```go
func ResetId()
```

##### `ResetManagementAgentId` <a name="ResetManagementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetManagementAgentId"></a>

```go
func ResetManagementAgentId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetProperties` <a name="ResetProperties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetSourceId` <a name="ResetSourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetSourceId"></a>

```go
func ResetSourceId()
```

##### `ResetTimeLastDiscovered` <a name="ResetTimeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeLastDiscovered"></a>

```go
func ResetTimeLastDiscovered()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimezoneRegion` <a name="ResetTimezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimezoneRegion"></a>

```go
func ResetTimezoneRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.LogAnalyticsLogAnalyticsEntity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.LogAnalyticsLogAnalyticsEntity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.LogAnalyticsLogAnalyticsEntity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.LogAnalyticsLogAnalyticsEntity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsLogAnalyticsEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsLogAnalyticsEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.areLogsCollected">AreLogsCollected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName">EntityTypeInternalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId">ManagementAgentCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName">ManagementAgentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference">LogAnalyticsLogAnalyticsEntityMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference">LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceIdInput">CloudResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeNameInput">EntityTypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadataInput">MetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceIdInput">SourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscoveredInput">TimeLastDiscoveredInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegionInput">TimezoneRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceId">CloudResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeName">EntityTypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceId">SourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered">TimeLastDiscovered</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegion">TimezoneRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AreLogsCollected`<sup>Required</sup> <a name="AreLogsCollected" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.areLogsCollected"></a>

```go
func AreLogsCollected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EntityTypeInternalName`<sup>Required</sup> <a name="EntityTypeInternalName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName"></a>

```go
func EntityTypeInternalName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagementAgentCompartmentId`<sup>Required</sup> <a name="ManagementAgentCompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId"></a>

```go
func ManagementAgentCompartmentId() *string
```

- *Type:* *string

---

##### `ManagementAgentDisplayName`<sup>Required</sup> <a name="ManagementAgentDisplayName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName"></a>

```go
func ManagementAgentDisplayName() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadata"></a>

```go
func Metadata() LogAnalyticsLogAnalyticsEntityMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference">LogAnalyticsLogAnalyticsEntityMetadataOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference">LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CloudResourceIdInput`<sup>Optional</sup> <a name="CloudResourceIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceIdInput"></a>

```go
func CloudResourceIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EntityTypeNameInput`<sup>Optional</sup> <a name="EntityTypeNameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeNameInput"></a>

```go
func EntityTypeNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentIdInput"></a>

```go
func ManagementAgentIdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadataInput"></a>

```go
func MetadataInput() LogAnalyticsLogAnalyticsEntityMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceIdInput"></a>

```go
func SourceIdInput() *string
```

- *Type:* *string

---

##### `TimeLastDiscoveredInput`<sup>Optional</sup> <a name="TimeLastDiscoveredInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscoveredInput"></a>

```go
func TimeLastDiscoveredInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneRegionInput`<sup>Optional</sup> <a name="TimezoneRegionInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegionInput"></a>

```go
func TimezoneRegionInput() *string
```

- *Type:* *string

---

##### `CloudResourceId`<sup>Required</sup> <a name="CloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceId"></a>

```go
func CloudResourceId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EntityTypeName`<sup>Required</sup> <a name="EntityTypeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeName"></a>

```go
func EntityTypeName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceId"></a>

```go
func SourceId() *string
```

- *Type:* *string

---

##### `TimeLastDiscovered`<sup>Required</sup> <a name="TimeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered"></a>

```go
func TimeLastDiscovered() *string
```

- *Type:* *string

---

##### `TimezoneRegion`<sup>Required</sup> <a name="TimezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegion"></a>

```go
func TimezoneRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsEntityConfig <a name="LogAnalyticsLogAnalyticsEntityConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

&loganalyticsloganalyticsentity.LogAnalyticsLogAnalyticsEntityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	EntityTypeName: *string,
	Name: *string,
	Namespace: *string,
	CloudResourceId: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Hostname: *string,
	Id: *string,
	ManagementAgentId: *string,
	Metadata: github.com/rhizo-co/cdktf-provider-oci-go/oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata,
	Properties: *map[string]*string,
	SourceId: *string,
	TimeLastDiscovered: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts,
	TimezoneRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.entityTypeName">EntityTypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.cloudResourceId">CloudResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.sourceId">SourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeLastDiscovered">TimeLastDiscovered</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timezoneRegion">TimezoneRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}.

---

##### `EntityTypeName`<sup>Required</sup> <a name="EntityTypeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.entityTypeName"></a>

```go
EntityTypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}.

---

##### `CloudResourceId`<sup>Optional</sup> <a name="CloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.cloudResourceId"></a>

```go
CloudResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementAgentId`<sup>Optional</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.managementAgentId"></a>

```go
ManagementAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.metadata"></a>

```go
Metadata LogAnalyticsLogAnalyticsEntityMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#metadata LogAnalyticsLogAnalyticsEntity#metadata}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}.

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.sourceId"></a>

```go
SourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}.

---

##### `TimeLastDiscovered`<sup>Optional</sup> <a name="TimeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeLastDiscovered"></a>

```go
TimeLastDiscovered *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsLogAnalyticsEntityTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timeouts LogAnalyticsLogAnalyticsEntity#timeouts}

---

##### `TimezoneRegion`<sup>Optional</sup> <a name="TimezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timezoneRegion"></a>

```go
TimezoneRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}.

---

### LogAnalyticsLogAnalyticsEntityMetadata <a name="LogAnalyticsLogAnalyticsEntityMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

&loganalyticsloganalyticsentity.LogAnalyticsLogAnalyticsEntityMetadata {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#items LogAnalyticsLogAnalyticsEntity#items}

---

### LogAnalyticsLogAnalyticsEntityMetadataItems <a name="LogAnalyticsLogAnalyticsEntityMetadataItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

&loganalyticsloganalyticsentity.LogAnalyticsLogAnalyticsEntityMetadataItems {
	Name: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#type LogAnalyticsLogAnalyticsEntity#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#value LogAnalyticsLogAnalyticsEntity#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#type LogAnalyticsLogAnalyticsEntity#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#value LogAnalyticsLogAnalyticsEntity#value}.

---

### LogAnalyticsLogAnalyticsEntityTimeouts <a name="LogAnalyticsLogAnalyticsEntityTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

&loganalyticsloganalyticsentity.LogAnalyticsLogAnalyticsEntityTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsEntityMetadataItemsList <a name="LogAnalyticsLogAnalyticsEntityMetadataItemsList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.NewLogAnalyticsLogAnalyticsEntityMetadataItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogAnalyticsLogAnalyticsEntityMetadataItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get"></a>

```go
func Get(index *f64) LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference <a name="LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.NewLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogAnalyticsLogAnalyticsEntityMetadataOutputReference <a name="LogAnalyticsLogAnalyticsEntityMetadataOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.NewLogAnalyticsLogAnalyticsEntityMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsLogAnalyticsEntityMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList">LogAnalyticsLogAnalyticsEntityMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items"></a>

```go
func Items() LogAnalyticsLogAnalyticsEntityMetadataItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList">LogAnalyticsLogAnalyticsEntityMetadataItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() LogAnalyticsLogAnalyticsEntityMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---


### LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsentity"

loganalyticsloganalyticsentity.NewLogAnalyticsLogAnalyticsEntityTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



