# `containerengineClusterStartCredentialRotationManagement` Submodule <a name="`containerengineClusterStartCredentialRotationManagement` Submodule" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineClusterStartCredentialRotationManagement <a name="ContainerengineClusterStartCredentialRotationManagement" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management oci_containerengine_cluster_start_credential_rotation_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterstartcredentialrotationmanagement"

containerengineclusterstartcredentialrotationmanagement.NewContainerengineClusterStartCredentialRotationManagement(scope Construct, id *string, config ContainerengineClusterStartCredentialRotationManagementConfig) ContainerengineClusterStartCredentialRotationManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig">ContainerengineClusterStartCredentialRotationManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig">ContainerengineClusterStartCredentialRotationManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.putTimeouts"></a>

```go
func PutTimeouts(value ContainerengineClusterStartCredentialRotationManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts">ContainerengineClusterStartCredentialRotationManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineClusterStartCredentialRotationManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterstartcredentialrotationmanagement"

containerengineclusterstartcredentialrotationmanagement.ContainerengineClusterStartCredentialRotationManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterstartcredentialrotationmanagement"

containerengineclusterstartcredentialrotationmanagement.ContainerengineClusterStartCredentialRotationManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterstartcredentialrotationmanagement"

containerengineclusterstartcredentialrotationmanagement.ContainerengineClusterStartCredentialRotationManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterstartcredentialrotationmanagement"

containerengineclusterstartcredentialrotationmanagement.ContainerengineClusterStartCredentialRotationManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerengineClusterStartCredentialRotationManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerengineClusterStartCredentialRotationManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerengineClusterStartCredentialRotationManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineClusterStartCredentialRotationManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference">ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.autoCompletionDelayDurationInput">AutoCompletionDelayDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.autoCompletionDelayDuration">AutoCompletionDelayDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.timeouts"></a>

```go
func Timeouts() ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference">ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference</a>

---

##### `AutoCompletionDelayDurationInput`<sup>Optional</sup> <a name="AutoCompletionDelayDurationInput" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.autoCompletionDelayDurationInput"></a>

```go
func AutoCompletionDelayDurationInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoCompletionDelayDuration`<sup>Required</sup> <a name="AutoCompletionDelayDuration" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.autoCompletionDelayDuration"></a>

```go
func AutoCompletionDelayDuration() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineClusterStartCredentialRotationManagementConfig <a name="ContainerengineClusterStartCredentialRotationManagementConfig" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterstartcredentialrotationmanagement"

&containerengineclusterstartcredentialrotationmanagement.ContainerengineClusterStartCredentialRotationManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutoCompletionDelayDuration: *string,
	ClusterId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.autoCompletionDelayDuration">AutoCompletionDelayDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#auto_completion_delay_duration ContainerengineClusterStartCredentialRotationManagement#auto_completion_delay_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#cluster_id ContainerengineClusterStartCredentialRotationManagement#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#id ContainerengineClusterStartCredentialRotationManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts">ContainerengineClusterStartCredentialRotationManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoCompletionDelayDuration`<sup>Required</sup> <a name="AutoCompletionDelayDuration" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.autoCompletionDelayDuration"></a>

```go
AutoCompletionDelayDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#auto_completion_delay_duration ContainerengineClusterStartCredentialRotationManagement#auto_completion_delay_duration}.

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#cluster_id ContainerengineClusterStartCredentialRotationManagement#cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#id ContainerengineClusterStartCredentialRotationManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementConfig.property.timeouts"></a>

```go
Timeouts ContainerengineClusterStartCredentialRotationManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts">ContainerengineClusterStartCredentialRotationManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#timeouts ContainerengineClusterStartCredentialRotationManagement#timeouts}

---

### ContainerengineClusterStartCredentialRotationManagementTimeouts <a name="ContainerengineClusterStartCredentialRotationManagementTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterstartcredentialrotationmanagement"

&containerengineclusterstartcredentialrotationmanagement.ContainerengineClusterStartCredentialRotationManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#create ContainerengineClusterStartCredentialRotationManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#delete ContainerengineClusterStartCredentialRotationManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#update ContainerengineClusterStartCredentialRotationManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#create ContainerengineClusterStartCredentialRotationManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#delete ContainerengineClusterStartCredentialRotationManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_start_credential_rotation_management#update ContainerengineClusterStartCredentialRotationManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference <a name="ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterstartcredentialrotationmanagement"

containerengineclusterstartcredentialrotationmanagement.NewContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineClusterStartCredentialRotationManagement.ContainerengineClusterStartCredentialRotationManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



