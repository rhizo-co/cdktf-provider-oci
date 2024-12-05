# `stackMonitoringMonitoredResourceType` Submodule <a name="`stackMonitoringMonitoredResourceType` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourceType <a name="StackMonitoringMonitoredResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type oci_stack_monitoring_monitored_resource_type}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.NewStackMonitoringMonitoredResourceType(scope Construct, id *string, config StackMonitoringMonitoredResourceTypeConfig) StackMonitoringMonitoredResourceType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig">StackMonitoringMonitoredResourceTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig">StackMonitoringMonitoredResourceTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetMetricNamespace">ResetMetricNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetResourceCategory">ResetResourceCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putMetadata"></a>

```go
func PutMetadata(value StackMonitoringMonitoredResourceTypeMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putTimeouts"></a>

```go
func PutTimeouts(value StackMonitoringMonitoredResourceTypeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts">StackMonitoringMonitoredResourceTypeTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetricNamespace` <a name="ResetMetricNamespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetMetricNamespace"></a>

```go
func ResetMetricNamespace()
```

##### `ResetResourceCategory` <a name="ResetResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetResourceCategory"></a>

```go
func ResetResourceCategory()
```

##### `ResetSourceType` <a name="ResetSourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetSourceType"></a>

```go
func ResetSourceType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourceType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.StackMonitoringMonitoredResourceType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.StackMonitoringMonitoredResourceType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.StackMonitoringMonitoredResourceType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.StackMonitoringMonitoredResourceType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourceType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StackMonitoringMonitoredResourceType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StackMonitoringMonitoredResourceType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourceType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference">StackMonitoringMonitoredResourceTypeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference">StackMonitoringMonitoredResourceTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metadataInput">MetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metricNamespaceInput">MetricNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.resourceCategoryInput">ResourceCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metricNamespace">MetricNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.resourceCategory">ResourceCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metadata"></a>

```go
func Metadata() StackMonitoringMonitoredResourceTypeMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference">StackMonitoringMonitoredResourceTypeMetadataOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeouts"></a>

```go
func Timeouts() StackMonitoringMonitoredResourceTypeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference">StackMonitoringMonitoredResourceTypeTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metadataInput"></a>

```go
func MetadataInput() StackMonitoringMonitoredResourceTypeMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a>

---

##### `MetricNamespaceInput`<sup>Optional</sup> <a name="MetricNamespaceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metricNamespaceInput"></a>

```go
func MetricNamespaceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceCategoryInput`<sup>Optional</sup> <a name="ResourceCategoryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.resourceCategoryInput"></a>

```go
func ResourceCategoryInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metricNamespace"></a>

```go
func MetricNamespace() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceCategory`<sup>Required</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.resourceCategory"></a>

```go
func ResourceCategory() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourceTypeConfig <a name="StackMonitoringMonitoredResourceTypeConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

&stackmonitoringmonitoredresourcetype.StackMonitoringMonitoredResourceTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Name: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Metadata: github.com/rhizo-co/cdktf-provider-oci-go/oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata,
	MetricNamespace: *string,
	ResourceCategory: *string,
	SourceType: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#compartment_id StackMonitoringMonitoredResourceType#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#name StackMonitoringMonitoredResourceType#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#defined_tags StackMonitoringMonitoredResourceType#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#description StackMonitoringMonitoredResourceType#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#display_name StackMonitoringMonitoredResourceType#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#freeform_tags StackMonitoringMonitoredResourceType#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#id StackMonitoringMonitoredResourceType#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a></code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.metricNamespace">MetricNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#metric_namespace StackMonitoringMonitoredResourceType#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.resourceCategory">ResourceCategory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#resource_category StackMonitoringMonitoredResourceType#resource_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#source_type StackMonitoringMonitoredResourceType#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts">StackMonitoringMonitoredResourceTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#compartment_id StackMonitoringMonitoredResourceType#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#name StackMonitoringMonitoredResourceType#name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#defined_tags StackMonitoringMonitoredResourceType#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#description StackMonitoringMonitoredResourceType#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#display_name StackMonitoringMonitoredResourceType#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#freeform_tags StackMonitoringMonitoredResourceType#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#id StackMonitoringMonitoredResourceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.metadata"></a>

```go
Metadata StackMonitoringMonitoredResourceTypeMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#metadata StackMonitoringMonitoredResourceType#metadata}

---

##### `MetricNamespace`<sup>Optional</sup> <a name="MetricNamespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.metricNamespace"></a>

```go
MetricNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#metric_namespace StackMonitoringMonitoredResourceType#metric_namespace}.

---

##### `ResourceCategory`<sup>Optional</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.resourceCategory"></a>

```go
ResourceCategory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#resource_category StackMonitoringMonitoredResourceType#resource_category}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#source_type StackMonitoringMonitoredResourceType#source_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.timeouts"></a>

```go
Timeouts StackMonitoringMonitoredResourceTypeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts">StackMonitoringMonitoredResourceTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#timeouts StackMonitoringMonitoredResourceType#timeouts}

---

### StackMonitoringMonitoredResourceTypeMetadata <a name="StackMonitoringMonitoredResourceTypeMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

&stackmonitoringmonitoredresourcetype.StackMonitoringMonitoredResourceTypeMetadata {
	Format: *string,
	AgentProperties: *[]*string,
	RequiredProperties: *[]*string,
	UniquePropertySets: interface{},
	ValidPropertiesForCreate: *[]*string,
	ValidPropertiesForUpdate: *[]*string,
	ValidPropertyValues: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#format StackMonitoringMonitoredResourceType#format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.agentProperties">AgentProperties</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#agent_properties StackMonitoringMonitoredResourceType#agent_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.requiredProperties">RequiredProperties</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#required_properties StackMonitoringMonitoredResourceType#required_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.uniquePropertySets">UniquePropertySets</a></code> | <code>interface{}</code> | unique_property_sets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertiesForCreate">ValidPropertiesForCreate</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_create StackMonitoringMonitoredResourceType#valid_properties_for_create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertiesForUpdate">ValidPropertiesForUpdate</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_update StackMonitoringMonitoredResourceType#valid_properties_for_update}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertyValues">ValidPropertyValues</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_property_values StackMonitoringMonitoredResourceType#valid_property_values}. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#format StackMonitoringMonitoredResourceType#format}.

---

##### `AgentProperties`<sup>Optional</sup> <a name="AgentProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.agentProperties"></a>

```go
AgentProperties *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#agent_properties StackMonitoringMonitoredResourceType#agent_properties}.

---

##### `RequiredProperties`<sup>Optional</sup> <a name="RequiredProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.requiredProperties"></a>

```go
RequiredProperties *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#required_properties StackMonitoringMonitoredResourceType#required_properties}.

---

##### `UniquePropertySets`<sup>Optional</sup> <a name="UniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.uniquePropertySets"></a>

```go
UniquePropertySets interface{}
```

- *Type:* interface{}

unique_property_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#unique_property_sets StackMonitoringMonitoredResourceType#unique_property_sets}

---

##### `ValidPropertiesForCreate`<sup>Optional</sup> <a name="ValidPropertiesForCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertiesForCreate"></a>

```go
ValidPropertiesForCreate *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_create StackMonitoringMonitoredResourceType#valid_properties_for_create}.

---

##### `ValidPropertiesForUpdate`<sup>Optional</sup> <a name="ValidPropertiesForUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertiesForUpdate"></a>

```go
ValidPropertiesForUpdate *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_update StackMonitoringMonitoredResourceType#valid_properties_for_update}.

---

##### `ValidPropertyValues`<sup>Optional</sup> <a name="ValidPropertyValues" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertyValues"></a>

```go
ValidPropertyValues *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_property_values StackMonitoringMonitoredResourceType#valid_property_values}.

---

### StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets <a name="StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

&stackmonitoringmonitoredresourcetype.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets {
	Properties: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets.property.properties">Properties</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#properties StackMonitoringMonitoredResourceType#properties}. |

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets.property.properties"></a>

```go
Properties *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#properties StackMonitoringMonitoredResourceType#properties}.

---

### StackMonitoringMonitoredResourceTypeTimeouts <a name="StackMonitoringMonitoredResourceTypeTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

&stackmonitoringmonitoredresourcetype.StackMonitoringMonitoredResourceTypeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#create StackMonitoringMonitoredResourceType#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#delete StackMonitoringMonitoredResourceType#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#update StackMonitoringMonitoredResourceType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#create StackMonitoringMonitoredResourceType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#delete StackMonitoringMonitoredResourceType#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#update StackMonitoringMonitoredResourceType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourceTypeMetadataOutputReference <a name="StackMonitoringMonitoredResourceTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.NewStackMonitoringMonitoredResourceTypeMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackMonitoringMonitoredResourceTypeMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.putUniquePropertySets">PutUniquePropertySets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetAgentProperties">ResetAgentProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetRequiredProperties">ResetRequiredProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetUniquePropertySets">ResetUniquePropertySets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertiesForCreate">ResetValidPropertiesForCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertiesForUpdate">ResetValidPropertiesForUpdate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertyValues">ResetValidPropertyValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUniquePropertySets` <a name="PutUniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.putUniquePropertySets"></a>

```go
func PutUniquePropertySets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.putUniquePropertySets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAgentProperties` <a name="ResetAgentProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetAgentProperties"></a>

```go
func ResetAgentProperties()
```

##### `ResetRequiredProperties` <a name="ResetRequiredProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetRequiredProperties"></a>

```go
func ResetRequiredProperties()
```

##### `ResetUniquePropertySets` <a name="ResetUniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetUniquePropertySets"></a>

```go
func ResetUniquePropertySets()
```

##### `ResetValidPropertiesForCreate` <a name="ResetValidPropertiesForCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertiesForCreate"></a>

```go
func ResetValidPropertiesForCreate()
```

##### `ResetValidPropertiesForUpdate` <a name="ResetValidPropertiesForUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertiesForUpdate"></a>

```go
func ResetValidPropertiesForUpdate()
```

##### `ResetValidPropertyValues` <a name="ResetValidPropertyValues" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertyValues"></a>

```go
func ResetValidPropertyValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.uniquePropertySets">UniquePropertySets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList">StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.agentPropertiesInput">AgentPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.requiredPropertiesInput">RequiredPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.uniquePropertySetsInput">UniquePropertySetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForCreateInput">ValidPropertiesForCreateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForUpdateInput">ValidPropertiesForUpdateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertyValuesInput">ValidPropertyValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.agentProperties">AgentProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.requiredProperties">RequiredProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForCreate">ValidPropertiesForCreate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForUpdate">ValidPropertiesForUpdate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertyValues">ValidPropertyValues</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UniquePropertySets`<sup>Required</sup> <a name="UniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.uniquePropertySets"></a>

```go
func UniquePropertySets() StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList">StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList</a>

---

##### `AgentPropertiesInput`<sup>Optional</sup> <a name="AgentPropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.agentPropertiesInput"></a>

```go
func AgentPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `RequiredPropertiesInput`<sup>Optional</sup> <a name="RequiredPropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.requiredPropertiesInput"></a>

```go
func RequiredPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UniquePropertySetsInput`<sup>Optional</sup> <a name="UniquePropertySetsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.uniquePropertySetsInput"></a>

```go
func UniquePropertySetsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidPropertiesForCreateInput`<sup>Optional</sup> <a name="ValidPropertiesForCreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForCreateInput"></a>

```go
func ValidPropertiesForCreateInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValidPropertiesForUpdateInput`<sup>Optional</sup> <a name="ValidPropertiesForUpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForUpdateInput"></a>

```go
func ValidPropertiesForUpdateInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValidPropertyValuesInput`<sup>Optional</sup> <a name="ValidPropertyValuesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertyValuesInput"></a>

```go
func ValidPropertyValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AgentProperties`<sup>Required</sup> <a name="AgentProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.agentProperties"></a>

```go
func AgentProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `RequiredProperties`<sup>Required</sup> <a name="RequiredProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.requiredProperties"></a>

```go
func RequiredProperties() *[]*string
```

- *Type:* *[]*string

---

##### `ValidPropertiesForCreate`<sup>Required</sup> <a name="ValidPropertiesForCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForCreate"></a>

```go
func ValidPropertiesForCreate() *[]*string
```

- *Type:* *[]*string

---

##### `ValidPropertiesForUpdate`<sup>Required</sup> <a name="ValidPropertiesForUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForUpdate"></a>

```go
func ValidPropertiesForUpdate() *[]*string
```

- *Type:* *[]*string

---

##### `ValidPropertyValues`<sup>Required</sup> <a name="ValidPropertyValues" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertyValues"></a>

```go
func ValidPropertyValues() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() StackMonitoringMonitoredResourceTypeMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a>

---


### StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList <a name="StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.NewStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.get"></a>

```go
func Get(index *f64) StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference <a name="StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.NewStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.properties">Properties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.properties"></a>

```go
func Properties() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StackMonitoringMonitoredResourceTypeTimeoutsOutputReference <a name="StackMonitoringMonitoredResourceTypeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcetype"

stackmonitoringmonitoredresourcetype.NewStackMonitoringMonitoredResourceTypeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackMonitoringMonitoredResourceTypeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



