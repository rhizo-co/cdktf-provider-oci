# `databaseManagementExternalExadataStorageGrid` Submodule <a name="`databaseManagementExternalExadataStorageGrid` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataStorageGrid <a name="DatabaseManagementExternalExadataStorageGrid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid oci_database_management_external_exadata_storage_grid}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

databasemanagementexternalexadatastoragegrid.NewDatabaseManagementExternalExadataStorageGrid(scope Construct, id *string, config DatabaseManagementExternalExadataStorageGridConfig) DatabaseManagementExternalExadataStorageGrid
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig">DatabaseManagementExternalExadataStorageGridConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig">DatabaseManagementExternalExadataStorageGridConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseManagementExternalExadataStorageGridTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

databasemanagementexternalexadatastoragegrid.DatabaseManagementExternalExadataStorageGrid_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

databasemanagementexternalexadatastoragegrid.DatabaseManagementExternalExadataStorageGrid_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

databasemanagementexternalexadatastoragegrid.DatabaseManagementExternalExadataStorageGrid_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

databasemanagementexternalexadatastoragegrid.DatabaseManagementExternalExadataStorageGrid_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseManagementExternalExadataStorageGrid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseManagementExternalExadataStorageGrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataStorageGrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.serverCount">ServerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.storageServers">StorageServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList">DatabaseManagementExternalExadataStorageGridStorageServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference">DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput">ExternalExadataStorageGridIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId">ExternalExadataStorageGridId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServerCount`<sup>Required</sup> <a name="ServerCount" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.serverCount"></a>

```go
func ServerCount() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageServers`<sup>Required</sup> <a name="StorageServers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.storageServers"></a>

```go
func StorageServers() DatabaseManagementExternalExadataStorageGridStorageServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList">DatabaseManagementExternalExadataStorageGridStorageServersList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeouts"></a>

```go
func Timeouts() DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference">DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalExadataStorageGridIdInput`<sup>Optional</sup> <a name="ExternalExadataStorageGridIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput"></a>

```go
func ExternalExadataStorageGridIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalExadataStorageGridId`<sup>Required</sup> <a name="ExternalExadataStorageGridId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId"></a>

```go
func ExternalExadataStorageGridId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataStorageGridConfig <a name="DatabaseManagementExternalExadataStorageGridConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

&databasemanagementexternalexadatastoragegrid.DatabaseManagementExternalExadataStorageGridConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalExadataStorageGridId: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId">ExternalExadataStorageGridId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#defined_tags DatabaseManagementExternalExadataStorageGrid#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#freeform_tags DatabaseManagementExternalExadataStorageGrid#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#id DatabaseManagementExternalExadataStorageGrid#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalExadataStorageGridId`<sup>Required</sup> <a name="ExternalExadataStorageGridId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId"></a>

```go
ExternalExadataStorageGridId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#defined_tags DatabaseManagementExternalExadataStorageGrid#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#freeform_tags DatabaseManagementExternalExadataStorageGrid#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#id DatabaseManagementExternalExadataStorageGrid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.timeouts"></a>

```go
Timeouts DatabaseManagementExternalExadataStorageGridTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#timeouts DatabaseManagementExternalExadataStorageGrid#timeouts}

---

### DatabaseManagementExternalExadataStorageGridStorageServers <a name="DatabaseManagementExternalExadataStorageGridStorageServers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

&databasemanagementexternalexadatastoragegrid.DatabaseManagementExternalExadataStorageGridStorageServers {

}
```


### DatabaseManagementExternalExadataStorageGridTimeouts <a name="DatabaseManagementExternalExadataStorageGridTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

&databasemanagementexternalexadatastoragegrid.DatabaseManagementExternalExadataStorageGridTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#create DatabaseManagementExternalExadataStorageGrid#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#delete DatabaseManagementExternalExadataStorageGrid#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#update DatabaseManagementExternalExadataStorageGrid#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#create DatabaseManagementExternalExadataStorageGrid#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#delete DatabaseManagementExternalExadataStorageGrid#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#update DatabaseManagementExternalExadataStorageGrid#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataStorageGridStorageServersList <a name="DatabaseManagementExternalExadataStorageGridStorageServersList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

databasemanagementexternalexadatastoragegrid.NewDatabaseManagementExternalExadataStorageGridStorageServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseManagementExternalExadataStorageGridStorageServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get"></a>

```go
func Get(index *f64) DatabaseManagementExternalExadataStorageGridStorageServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseManagementExternalExadataStorageGridStorageServersOutputReference <a name="DatabaseManagementExternalExadataStorageGridStorageServersOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

databasemanagementexternalexadatastoragegrid.NewDatabaseManagementExternalExadataStorageGridStorageServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseManagementExternalExadataStorageGridStorageServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId">ConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel">MakeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops">MaxFlashDiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput">MaxFlashDiskThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops">MaxHardDiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput">MaxHardDiskThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers">DatabaseManagementExternalExadataStorageGridStorageServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId"></a>

```go
func ConnectorId() *string
```

- *Type:* *string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MakeModel`<sup>Required</sup> <a name="MakeModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel"></a>

```go
func MakeModel() *string
```

- *Type:* *string

---

##### `MaxFlashDiskIops`<sup>Required</sup> <a name="MaxFlashDiskIops" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops"></a>

```go
func MaxFlashDiskIops() *f64
```

- *Type:* *f64

---

##### `MaxFlashDiskThroughput`<sup>Required</sup> <a name="MaxFlashDiskThroughput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput"></a>

```go
func MaxFlashDiskThroughput() *f64
```

- *Type:* *f64

---

##### `MaxHardDiskIops`<sup>Required</sup> <a name="MaxHardDiskIops" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops"></a>

```go
func MaxHardDiskIops() *f64
```

- *Type:* *f64

---

##### `MaxHardDiskThroughput`<sup>Required</sup> <a name="MaxHardDiskThroughput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput"></a>

```go
func MaxHardDiskThroughput() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseManagementExternalExadataStorageGridStorageServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers">DatabaseManagementExternalExadataStorageGridStorageServers</a>

---


### DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference <a name="DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternalexadatastoragegrid"

databasemanagementexternalexadatastoragegrid.NewDatabaseManagementExternalExadataStorageGridTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



