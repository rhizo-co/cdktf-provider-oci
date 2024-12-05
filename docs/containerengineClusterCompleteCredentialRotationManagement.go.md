# `containerengineClusterCompleteCredentialRotationManagement` Submodule <a name="`containerengineClusterCompleteCredentialRotationManagement` Submodule" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineClusterCompleteCredentialRotationManagement <a name="ContainerengineClusterCompleteCredentialRotationManagement" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management oci_containerengine_cluster_complete_credential_rotation_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclustercompletecredentialrotationmanagement"

containerengineclustercompletecredentialrotationmanagement.NewContainerengineClusterCompleteCredentialRotationManagement(scope Construct, id *string, config ContainerengineClusterCompleteCredentialRotationManagementConfig) ContainerengineClusterCompleteCredentialRotationManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig">ContainerengineClusterCompleteCredentialRotationManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig">ContainerengineClusterCompleteCredentialRotationManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.putTimeouts"></a>

```go
func PutTimeouts(value ContainerengineClusterCompleteCredentialRotationManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts">ContainerengineClusterCompleteCredentialRotationManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineClusterCompleteCredentialRotationManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclustercompletecredentialrotationmanagement"

containerengineclustercompletecredentialrotationmanagement.ContainerengineClusterCompleteCredentialRotationManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclustercompletecredentialrotationmanagement"

containerengineclustercompletecredentialrotationmanagement.ContainerengineClusterCompleteCredentialRotationManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclustercompletecredentialrotationmanagement"

containerengineclustercompletecredentialrotationmanagement.ContainerengineClusterCompleteCredentialRotationManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclustercompletecredentialrotationmanagement"

containerengineclustercompletecredentialrotationmanagement.ContainerengineClusterCompleteCredentialRotationManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerengineClusterCompleteCredentialRotationManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerengineClusterCompleteCredentialRotationManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerengineClusterCompleteCredentialRotationManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineClusterCompleteCredentialRotationManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference">ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.timeouts"></a>

```go
func Timeouts() ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference">ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineClusterCompleteCredentialRotationManagementConfig <a name="ContainerengineClusterCompleteCredentialRotationManagementConfig" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclustercompletecredentialrotationmanagement"

&containerengineclustercompletecredentialrotationmanagement.ContainerengineClusterCompleteCredentialRotationManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#cluster_id ContainerengineClusterCompleteCredentialRotationManagement#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#id ContainerengineClusterCompleteCredentialRotationManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts">ContainerengineClusterCompleteCredentialRotationManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#cluster_id ContainerengineClusterCompleteCredentialRotationManagement#cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#id ContainerengineClusterCompleteCredentialRotationManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementConfig.property.timeouts"></a>

```go
Timeouts ContainerengineClusterCompleteCredentialRotationManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts">ContainerengineClusterCompleteCredentialRotationManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#timeouts ContainerengineClusterCompleteCredentialRotationManagement#timeouts}

---

### ContainerengineClusterCompleteCredentialRotationManagementTimeouts <a name="ContainerengineClusterCompleteCredentialRotationManagementTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclustercompletecredentialrotationmanagement"

&containerengineclustercompletecredentialrotationmanagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#create ContainerengineClusterCompleteCredentialRotationManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#delete ContainerengineClusterCompleteCredentialRotationManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#update ContainerengineClusterCompleteCredentialRotationManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#create ContainerengineClusterCompleteCredentialRotationManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#delete ContainerengineClusterCompleteCredentialRotationManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_complete_credential_rotation_management#update ContainerengineClusterCompleteCredentialRotationManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference <a name="ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclustercompletecredentialrotationmanagement"

containerengineclustercompletecredentialrotationmanagement.NewContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineClusterCompleteCredentialRotationManagement.ContainerengineClusterCompleteCredentialRotationManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



