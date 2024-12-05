# `osmanagementSoftwareSource` Submodule <a name="`osmanagementSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementSoftwareSource <a name="OsmanagementSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source oci_osmanagement_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

osmanagementsoftwaresource.NewOsmanagementSoftwareSource(scope Construct, id *string, config OsmanagementSoftwareSourceConfig) OsmanagementSoftwareSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig">OsmanagementSoftwareSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig">OsmanagementSoftwareSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetChecksumType">ResetChecksumType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerEmail">ResetMaintainerEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerName">ResetMaintainerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerPhone">ResetMaintainerPhone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts"></a>

```go
func PutTimeouts(value OsmanagementSoftwareSourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>

---

##### `ResetChecksumType` <a name="ResetChecksumType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetChecksumType"></a>

```go
func ResetChecksumType()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintainerEmail` <a name="ResetMaintainerEmail" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerEmail"></a>

```go
func ResetMaintainerEmail()
```

##### `ResetMaintainerName` <a name="ResetMaintainerName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerName"></a>

```go
func ResetMaintainerName()
```

##### `ResetMaintainerPhone` <a name="ResetMaintainerPhone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerPhone"></a>

```go
func ResetMaintainerPhone()
```

##### `ResetParentId` <a name="ResetParentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetParentId"></a>

```go
func ResetParentId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

osmanagementsoftwaresource.OsmanagementSoftwareSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

osmanagementsoftwaresource.OsmanagementSoftwareSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

osmanagementsoftwaresource.OsmanagementSoftwareSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

osmanagementsoftwaresource.OsmanagementSoftwareSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsmanagementSoftwareSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsmanagementSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.associatedManagedInstances">AssociatedManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList">OsmanagementSoftwareSourceAssociatedManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyFingerprint">GpgKeyFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyId">GpgKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyUrl">GpgKeyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.packages">Packages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentName">ParentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.repoType">RepoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference">OsmanagementSoftwareSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archTypeInput">ArchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumTypeInput">ChecksumTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmailInput">MaintainerEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerNameInput">MaintainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhoneInput">MaintainerPhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumType">ChecksumType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmail">MaintainerEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerName">MaintainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhone">MaintainerPhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedManagedInstances`<sup>Required</sup> <a name="AssociatedManagedInstances" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.associatedManagedInstances"></a>

```go
func AssociatedManagedInstances() OsmanagementSoftwareSourceAssociatedManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList">OsmanagementSoftwareSourceAssociatedManagedInstancesList</a>

---

##### `GpgKeyFingerprint`<sup>Required</sup> <a name="GpgKeyFingerprint" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyFingerprint"></a>

```go
func GpgKeyFingerprint() *string
```

- *Type:* *string

---

##### `GpgKeyId`<sup>Required</sup> <a name="GpgKeyId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyId"></a>

```go
func GpgKeyId() *string
```

- *Type:* *string

---

##### `GpgKeyUrl`<sup>Required</sup> <a name="GpgKeyUrl" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyUrl"></a>

```go
func GpgKeyUrl() *string
```

- *Type:* *string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.packages"></a>

```go
func Packages() *f64
```

- *Type:* *f64

---

##### `ParentName`<sup>Required</sup> <a name="ParentName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentName"></a>

```go
func ParentName() *string
```

- *Type:* *string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.repoType"></a>

```go
func RepoType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeouts"></a>

```go
func Timeouts() OsmanagementSoftwareSourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference">OsmanagementSoftwareSourceTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archTypeInput"></a>

```go
func ArchTypeInput() *string
```

- *Type:* *string

---

##### `ChecksumTypeInput`<sup>Optional</sup> <a name="ChecksumTypeInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumTypeInput"></a>

```go
func ChecksumTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintainerEmailInput`<sup>Optional</sup> <a name="MaintainerEmailInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmailInput"></a>

```go
func MaintainerEmailInput() *string
```

- *Type:* *string

---

##### `MaintainerNameInput`<sup>Optional</sup> <a name="MaintainerNameInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerNameInput"></a>

```go
func MaintainerNameInput() *string
```

- *Type:* *string

---

##### `MaintainerPhoneInput`<sup>Optional</sup> <a name="MaintainerPhoneInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhoneInput"></a>

```go
func MaintainerPhoneInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `ChecksumType`<sup>Required</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumType"></a>

```go
func ChecksumType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintainerEmail`<sup>Required</sup> <a name="MaintainerEmail" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmail"></a>

```go
func MaintainerEmail() *string
```

- *Type:* *string

---

##### `MaintainerName`<sup>Required</sup> <a name="MaintainerName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerName"></a>

```go
func MaintainerName() *string
```

- *Type:* *string

---

##### `MaintainerPhone`<sup>Required</sup> <a name="MaintainerPhone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhone"></a>

```go
func MaintainerPhone() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementSoftwareSourceAssociatedManagedInstances <a name="OsmanagementSoftwareSourceAssociatedManagedInstances" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

&osmanagementsoftwaresource.OsmanagementSoftwareSourceAssociatedManagedInstances {

}
```


### OsmanagementSoftwareSourceConfig <a name="OsmanagementSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

&osmanagementsoftwaresource.OsmanagementSoftwareSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArchType: *string,
	CompartmentId: *string,
	DisplayName: *string,
	ChecksumType: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	MaintainerEmail: *string,
	MaintainerName: *string,
	MaintainerPhone: *string,
	ParentId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.archType">ArchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.checksumType">ChecksumType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerEmail">MaintainerEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerName">MaintainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerPhone">MaintainerPhone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.parentId">ParentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.archType"></a>

```go
ArchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}.

---

##### `ChecksumType`<sup>Optional</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.checksumType"></a>

```go
ChecksumType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintainerEmail`<sup>Optional</sup> <a name="MaintainerEmail" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerEmail"></a>

```go
MaintainerEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}.

---

##### `MaintainerName`<sup>Optional</sup> <a name="MaintainerName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerName"></a>

```go
MaintainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}.

---

##### `MaintainerPhone`<sup>Optional</sup> <a name="MaintainerPhone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerPhone"></a>

```go
MaintainerPhone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}.

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.timeouts"></a>

```go
Timeouts OsmanagementSoftwareSourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#timeouts OsmanagementSoftwareSource#timeouts}

---

### OsmanagementSoftwareSourceTimeouts <a name="OsmanagementSoftwareSourceTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

&osmanagementsoftwaresource.OsmanagementSoftwareSourceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#create OsmanagementSoftwareSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#delete OsmanagementSoftwareSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#update OsmanagementSoftwareSource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#create OsmanagementSoftwareSource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#delete OsmanagementSoftwareSource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#update OsmanagementSoftwareSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementSoftwareSourceAssociatedManagedInstancesList <a name="OsmanagementSoftwareSourceAssociatedManagedInstancesList" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

osmanagementsoftwaresource.NewOsmanagementSoftwareSourceAssociatedManagedInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsmanagementSoftwareSourceAssociatedManagedInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get"></a>

```go
func Get(index *f64) OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference <a name="OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

osmanagementsoftwaresource.NewOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances">OsmanagementSoftwareSourceAssociatedManagedInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() OsmanagementSoftwareSourceAssociatedManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances">OsmanagementSoftwareSourceAssociatedManagedInstances</a>

---


### OsmanagementSoftwareSourceTimeoutsOutputReference <a name="OsmanagementSoftwareSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementsoftwaresource"

osmanagementsoftwaresource.NewOsmanagementSoftwareSourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsmanagementSoftwareSourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



