# `databaseCloudDatabaseManagement` Submodule <a name="`databaseCloudDatabaseManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudDatabaseManagement <a name="DatabaseCloudDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management oci_database_cloud_database_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

databaseclouddatabasemanagement.NewDatabaseCloudDatabaseManagement(scope Construct, id *string, config DatabaseCloudDatabaseManagementConfig) DatabaseCloudDatabaseManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig">DatabaseCloudDatabaseManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig">DatabaseCloudDatabaseManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails">PutCredentialdetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetSslSecretId">ResetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentialdetails` <a name="PutCredentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails"></a>

```go
func PutCredentialdetails(value DatabaseCloudDatabaseManagementCredentialdetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseCloudDatabaseManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetRole"></a>

```go
func ResetRole()
```

##### `ResetSslSecretId` <a name="ResetSslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetSslSecretId"></a>

```go
func ResetSslSecretId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudDatabaseManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

databaseclouddatabasemanagement.DatabaseCloudDatabaseManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

databaseclouddatabasemanagement.DatabaseCloudDatabaseManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

databaseclouddatabasemanagement.DatabaseCloudDatabaseManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

databaseclouddatabasemanagement.DatabaseCloudDatabaseManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseCloudDatabaseManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseCloudDatabaseManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseCloudDatabaseManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudDatabaseManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetails">Credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference">DatabaseCloudDatabaseManagementCredentialdetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference">DatabaseCloudDatabaseManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetailsInput">CredentialdetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagementInput">EnableManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementTypeInput">ManagementTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointIdInput">PrivateEndPointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretIdInput">SslSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagement">EnableManagement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementType">ManagementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointId">PrivateEndPointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretId">SslSecretId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credentialdetails`<sup>Required</sup> <a name="Credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetails"></a>

```go
func Credentialdetails() DatabaseCloudDatabaseManagementCredentialdetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference">DatabaseCloudDatabaseManagementCredentialdetailsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeouts"></a>

```go
func Timeouts() DatabaseCloudDatabaseManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference">DatabaseCloudDatabaseManagementTimeoutsOutputReference</a>

---

##### `CredentialdetailsInput`<sup>Optional</sup> <a name="CredentialdetailsInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetailsInput"></a>

```go
func CredentialdetailsInput() DatabaseCloudDatabaseManagementCredentialdetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `EnableManagementInput`<sup>Optional</sup> <a name="EnableManagementInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagementInput"></a>

```go
func EnableManagementInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementTypeInput`<sup>Optional</sup> <a name="ManagementTypeInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementTypeInput"></a>

```go
func ManagementTypeInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrivateEndPointIdInput`<sup>Optional</sup> <a name="PrivateEndPointIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointIdInput"></a>

```go
func PrivateEndPointIdInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `SslSecretIdInput`<sup>Optional</sup> <a name="SslSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretIdInput"></a>

```go
func SslSecretIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `EnableManagement`<sup>Required</sup> <a name="EnableManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagement"></a>

```go
func EnableManagement() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementType"></a>

```go
func ManagementType() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivateEndPointId`<sup>Required</sup> <a name="PrivateEndPointId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointId"></a>

```go
func PrivateEndPointId() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretId"></a>

```go
func SslSecretId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudDatabaseManagementConfig <a name="DatabaseCloudDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

&databaseclouddatabasemanagement.DatabaseCloudDatabaseManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Credentialdetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails,
	DatabaseId: *string,
	EnableManagement: interface{},
	ManagementType: *string,
	PrivateEndPointId: *string,
	ServiceName: *string,
	Id: *string,
	Port: *f64,
	Protocol: *string,
	Role: *string,
	SslSecretId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.credentialdetails">Credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | credentialdetails block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.enableManagement">EnableManagement</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.managementType">ManagementType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.privateEndPointId">PrivateEndPointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.sslSecretId">SslSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credentialdetails`<sup>Required</sup> <a name="Credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.credentialdetails"></a>

```go
Credentialdetails DatabaseCloudDatabaseManagementCredentialdetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

credentialdetails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#credentialdetails DatabaseCloudDatabaseManagement#credentialdetails}

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}.

---

##### `EnableManagement`<sup>Required</sup> <a name="EnableManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.enableManagement"></a>

```go
EnableManagement interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}.

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.managementType"></a>

```go
ManagementType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}.

---

##### `PrivateEndPointId`<sup>Required</sup> <a name="PrivateEndPointId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.privateEndPointId"></a>

```go
PrivateEndPointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}.

---

##### `SslSecretId`<sup>Optional</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.sslSecretId"></a>

```go
SslSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.timeouts"></a>

```go
Timeouts DatabaseCloudDatabaseManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#timeouts DatabaseCloudDatabaseManagement#timeouts}

---

### DatabaseCloudDatabaseManagementCredentialdetails <a name="DatabaseCloudDatabaseManagementCredentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

&databaseclouddatabasemanagement.DatabaseCloudDatabaseManagementCredentialdetails {
	PasswordSecretId: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}. |

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.passwordSecretId"></a>

```go
PasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}.

---

### DatabaseCloudDatabaseManagementTimeouts <a name="DatabaseCloudDatabaseManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

&databaseclouddatabasemanagement.DatabaseCloudDatabaseManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudDatabaseManagementCredentialdetailsOutputReference <a name="DatabaseCloudDatabaseManagementCredentialdetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

databaseclouddatabasemanagement.NewDatabaseCloudDatabaseManagementCredentialdetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseCloudDatabaseManagementCredentialdetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretIdInput"></a>

```go
func PasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseCloudDatabaseManagementCredentialdetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---


### DatabaseCloudDatabaseManagementTimeoutsOutputReference <a name="DatabaseCloudDatabaseManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseclouddatabasemanagement"

databaseclouddatabasemanagement.NewDatabaseCloudDatabaseManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseCloudDatabaseManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



