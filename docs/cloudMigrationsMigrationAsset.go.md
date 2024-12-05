# `cloudMigrationsMigrationAsset` Submodule <a name="`cloudMigrationsMigrationAsset` Submodule" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudMigrationsMigrationAsset <a name="CloudMigrationsMigrationAsset" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationasset"

cloudmigrationsmigrationasset.NewCloudMigrationsMigrationAsset(scope Construct, id *string, config CloudMigrationsMigrationAssetConfig) CloudMigrationsMigrationAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig">CloudMigrationsMigrationAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig">CloudMigrationsMigrationAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetMigrationAssetDependsOn">ResetMigrationAssetDependsOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetReplicationScheduleId">ResetReplicationScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts"></a>

```go
func PutTimeouts(value CloudMigrationsMigrationAssetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetId"></a>

```go
func ResetId()
```

##### `ResetMigrationAssetDependsOn` <a name="ResetMigrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetMigrationAssetDependsOn"></a>

```go
func ResetMigrationAssetDependsOn()
```

##### `ResetReplicationScheduleId` <a name="ResetReplicationScheduleId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetReplicationScheduleId"></a>

```go
func ResetReplicationScheduleId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationasset"

cloudmigrationsmigrationasset.CloudMigrationsMigrationAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationasset"

cloudmigrationsmigrationasset.CloudMigrationsMigrationAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationasset"

cloudmigrationsmigrationasset.CloudMigrationsMigrationAsset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationasset"

cloudmigrationsmigrationasset.CloudMigrationsMigrationAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudMigrationsMigrationAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudMigrationsMigrationAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudMigrationsMigrationAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependedOnBy">DependedOnBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.notifications">Notifications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.parentSnapshot">ParentSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapshots">Snapshots</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.sourceAssetId">SourceAssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference">CloudMigrationsMigrationAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetIdInput">InventoryAssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOnInput">MigrationAssetDependsOnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationIdInput">MigrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentIdInput">ReplicationCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleIdInput">ReplicationScheduleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketNameInput">SnapShotBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetId">InventoryAssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOn">MigrationAssetDependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationId">MigrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentId">ReplicationCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleId">ReplicationScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketName">SnapShotBucketName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DependedOnBy`<sup>Required</sup> <a name="DependedOnBy" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependedOnBy"></a>

```go
func DependedOnBy() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.notifications"></a>

```go
func Notifications() *[]*string
```

- *Type:* *[]*string

---

##### `ParentSnapshot`<sup>Required</sup> <a name="ParentSnapshot" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.parentSnapshot"></a>

```go
func ParentSnapshot() *string
```

- *Type:* *string

---

##### `Snapshots`<sup>Required</sup> <a name="Snapshots" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapshots"></a>

```go
func Snapshots() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SourceAssetId`<sup>Required</sup> <a name="SourceAssetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.sourceAssetId"></a>

```go
func SourceAssetId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeouts"></a>

```go
func Timeouts() CloudMigrationsMigrationAssetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference">CloudMigrationsMigrationAssetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InventoryAssetIdInput`<sup>Optional</sup> <a name="InventoryAssetIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetIdInput"></a>

```go
func InventoryAssetIdInput() *string
```

- *Type:* *string

---

##### `MigrationAssetDependsOnInput`<sup>Optional</sup> <a name="MigrationAssetDependsOnInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOnInput"></a>

```go
func MigrationAssetDependsOnInput() *[]*string
```

- *Type:* *[]*string

---

##### `MigrationIdInput`<sup>Optional</sup> <a name="MigrationIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationIdInput"></a>

```go
func MigrationIdInput() *string
```

- *Type:* *string

---

##### `ReplicationCompartmentIdInput`<sup>Optional</sup> <a name="ReplicationCompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentIdInput"></a>

```go
func ReplicationCompartmentIdInput() *string
```

- *Type:* *string

---

##### `ReplicationScheduleIdInput`<sup>Optional</sup> <a name="ReplicationScheduleIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleIdInput"></a>

```go
func ReplicationScheduleIdInput() *string
```

- *Type:* *string

---

##### `SnapShotBucketNameInput`<sup>Optional</sup> <a name="SnapShotBucketNameInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketNameInput"></a>

```go
func SnapShotBucketNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InventoryAssetId`<sup>Required</sup> <a name="InventoryAssetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetId"></a>

```go
func InventoryAssetId() *string
```

- *Type:* *string

---

##### `MigrationAssetDependsOn`<sup>Required</sup> <a name="MigrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOn"></a>

```go
func MigrationAssetDependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationId"></a>

```go
func MigrationId() *string
```

- *Type:* *string

---

##### `ReplicationCompartmentId`<sup>Required</sup> <a name="ReplicationCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentId"></a>

```go
func ReplicationCompartmentId() *string
```

- *Type:* *string

---

##### `ReplicationScheduleId`<sup>Required</sup> <a name="ReplicationScheduleId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleId"></a>

```go
func ReplicationScheduleId() *string
```

- *Type:* *string

---

##### `SnapShotBucketName`<sup>Required</sup> <a name="SnapShotBucketName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketName"></a>

```go
func SnapShotBucketName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudMigrationsMigrationAssetConfig <a name="CloudMigrationsMigrationAssetConfig" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationasset"

&cloudmigrationsmigrationasset.CloudMigrationsMigrationAssetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	InventoryAssetId: *string,
	MigrationId: *string,
	ReplicationCompartmentId: *string,
	SnapShotBucketName: *string,
	DisplayName: *string,
	Id: *string,
	MigrationAssetDependsOn: *[]*string,
	ReplicationScheduleId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.inventoryAssetId">InventoryAssetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationId">MigrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationCompartmentId">ReplicationCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.snapShotBucketName">SnapShotBucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationAssetDependsOn">MigrationAssetDependsOn</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationScheduleId">ReplicationScheduleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}.

---

##### `InventoryAssetId`<sup>Required</sup> <a name="InventoryAssetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.inventoryAssetId"></a>

```go
InventoryAssetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}.

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationId"></a>

```go
MigrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}.

---

##### `ReplicationCompartmentId`<sup>Required</sup> <a name="ReplicationCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationCompartmentId"></a>

```go
ReplicationCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}.

---

##### `SnapShotBucketName`<sup>Required</sup> <a name="SnapShotBucketName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.snapShotBucketName"></a>

```go
SnapShotBucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MigrationAssetDependsOn`<sup>Optional</sup> <a name="MigrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationAssetDependsOn"></a>

```go
MigrationAssetDependsOn *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}.

---

##### `ReplicationScheduleId`<sup>Optional</sup> <a name="ReplicationScheduleId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationScheduleId"></a>

```go
ReplicationScheduleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.timeouts"></a>

```go
Timeouts CloudMigrationsMigrationAssetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#timeouts CloudMigrationsMigrationAsset#timeouts}

---

### CloudMigrationsMigrationAssetTimeouts <a name="CloudMigrationsMigrationAssetTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationasset"

&cloudmigrationsmigrationasset.CloudMigrationsMigrationAssetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#create CloudMigrationsMigrationAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#delete CloudMigrationsMigrationAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#update CloudMigrationsMigrationAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#create CloudMigrationsMigrationAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#delete CloudMigrationsMigrationAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#update CloudMigrationsMigrationAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudMigrationsMigrationAssetTimeoutsOutputReference <a name="CloudMigrationsMigrationAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudmigrationsmigrationasset"

cloudmigrationsmigrationasset.NewCloudMigrationsMigrationAssetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudMigrationsMigrationAssetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



