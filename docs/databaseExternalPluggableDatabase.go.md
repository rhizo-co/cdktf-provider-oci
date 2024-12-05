# `databaseExternalPluggableDatabase` Submodule <a name="`databaseExternalPluggableDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalPluggableDatabase <a name="DatabaseExternalPluggableDatabase" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database oci_database_external_pluggable_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.NewDatabaseExternalPluggableDatabase(scope Construct, id *string, config DatabaseExternalPluggableDatabaseConfig) DatabaseExternalPluggableDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig">DatabaseExternalPluggableDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig">DatabaseExternalPluggableDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetSourceId">ResetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseExternalPluggableDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts">DatabaseExternalPluggableDatabaseTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceId` <a name="ResetSourceId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetSourceId"></a>

```go
func ResetSourceId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalPluggableDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseExternalPluggableDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseExternalPluggableDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseExternalPluggableDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalPluggableDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.databaseConfiguration">DatabaseConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList">DatabaseExternalPluggableDatabaseDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.dbId">DbId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.dbPacks">DbPacks</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.operationsInsightsConfig">OperationsInsightsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList">DatabaseExternalPluggableDatabaseOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.stackMonitoringConfig">StackMonitoringConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList">DatabaseExternalPluggableDatabaseStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference">DatabaseExternalPluggableDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.externalContainerDatabaseIdInput">ExternalContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.sourceIdInput">SourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.externalContainerDatabaseId">ExternalContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.sourceId">SourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `DatabaseConfiguration`<sup>Required</sup> <a name="DatabaseConfiguration" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.databaseConfiguration"></a>

```go
func DatabaseConfiguration() *string
```

- *Type:* *string

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.databaseEdition"></a>

```go
func DatabaseEdition() *string
```

- *Type:* *string

---

##### `DatabaseManagementConfig`<sup>Required</sup> <a name="DatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.databaseManagementConfig"></a>

```go
func DatabaseManagementConfig() DatabaseExternalPluggableDatabaseDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList">DatabaseExternalPluggableDatabaseDatabaseManagementConfigList</a>

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DbId`<sup>Required</sup> <a name="DbId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.dbId"></a>

```go
func DbId() *string
```

- *Type:* *string

---

##### `DbPacks`<sup>Required</sup> <a name="DbPacks" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.dbPacks"></a>

```go
func DbPacks() *string
```

- *Type:* *string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.dbUniqueName"></a>

```go
func DbUniqueName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.ncharacterSet"></a>

```go
func NcharacterSet() *string
```

- *Type:* *string

---

##### `OperationsInsightsConfig`<sup>Required</sup> <a name="OperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.operationsInsightsConfig"></a>

```go
func OperationsInsightsConfig() DatabaseExternalPluggableDatabaseOperationsInsightsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList">DatabaseExternalPluggableDatabaseOperationsInsightsConfigList</a>

---

##### `StackMonitoringConfig`<sup>Required</sup> <a name="StackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.stackMonitoringConfig"></a>

```go
func StackMonitoringConfig() DatabaseExternalPluggableDatabaseStackMonitoringConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList">DatabaseExternalPluggableDatabaseStackMonitoringConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.timeouts"></a>

```go
func Timeouts() DatabaseExternalPluggableDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference">DatabaseExternalPluggableDatabaseTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalContainerDatabaseIdInput`<sup>Optional</sup> <a name="ExternalContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.externalContainerDatabaseIdInput"></a>

```go
func ExternalContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.sourceIdInput"></a>

```go
func SourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalContainerDatabaseId`<sup>Required</sup> <a name="ExternalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.externalContainerDatabaseId"></a>

```go
func ExternalContainerDatabaseId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.sourceId"></a>

```go
func SourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalPluggableDatabaseConfig <a name="DatabaseExternalPluggableDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

&databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ExternalContainerDatabaseId: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	SourceId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#compartment_id DatabaseExternalPluggableDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#display_name DatabaseExternalPluggableDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.externalContainerDatabaseId">ExternalContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#external_container_database_id DatabaseExternalPluggableDatabase#external_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#defined_tags DatabaseExternalPluggableDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#freeform_tags DatabaseExternalPluggableDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#id DatabaseExternalPluggableDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.sourceId">SourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#source_id DatabaseExternalPluggableDatabase#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts">DatabaseExternalPluggableDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#compartment_id DatabaseExternalPluggableDatabase#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#display_name DatabaseExternalPluggableDatabase#display_name}.

---

##### `ExternalContainerDatabaseId`<sup>Required</sup> <a name="ExternalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.externalContainerDatabaseId"></a>

```go
ExternalContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#external_container_database_id DatabaseExternalPluggableDatabase#external_container_database_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#defined_tags DatabaseExternalPluggableDatabase#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#freeform_tags DatabaseExternalPluggableDatabase#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#id DatabaseExternalPluggableDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.sourceId"></a>

```go
SourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#source_id DatabaseExternalPluggableDatabase#source_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseConfig.property.timeouts"></a>

```go
Timeouts DatabaseExternalPluggableDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts">DatabaseExternalPluggableDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#timeouts DatabaseExternalPluggableDatabase#timeouts}

---

### DatabaseExternalPluggableDatabaseDatabaseManagementConfig <a name="DatabaseExternalPluggableDatabaseDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

&databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfig {

}
```


### DatabaseExternalPluggableDatabaseOperationsInsightsConfig <a name="DatabaseExternalPluggableDatabaseOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

&databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfig {

}
```


### DatabaseExternalPluggableDatabaseStackMonitoringConfig <a name="DatabaseExternalPluggableDatabaseStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

&databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfig {

}
```


### DatabaseExternalPluggableDatabaseTimeouts <a name="DatabaseExternalPluggableDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

&databaseexternalpluggabledatabase.DatabaseExternalPluggableDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#create DatabaseExternalPluggableDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#delete DatabaseExternalPluggableDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#update DatabaseExternalPluggableDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#create DatabaseExternalPluggableDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#delete DatabaseExternalPluggableDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database#update DatabaseExternalPluggableDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalPluggableDatabaseDatabaseManagementConfigList <a name="DatabaseExternalPluggableDatabaseDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.NewDatabaseExternalPluggableDatabaseDatabaseManagementConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseExternalPluggableDatabaseDatabaseManagementConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.get"></a>

```go
func Get(index *f64) DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference <a name="DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.NewDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">DatabaseManagementConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus">DatabaseManagementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfig">DatabaseExternalPluggableDatabaseDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseManagementConnectionId`<sup>Required</sup> <a name="DatabaseManagementConnectionId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```go
func DatabaseManagementConnectionId() *string
```

- *Type:* *string

---

##### `DatabaseManagementStatus`<sup>Required</sup> <a name="DatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```go
func DatabaseManagementStatus() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseExternalPluggableDatabaseDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseDatabaseManagementConfig">DatabaseExternalPluggableDatabaseDatabaseManagementConfig</a>

---


### DatabaseExternalPluggableDatabaseOperationsInsightsConfigList <a name="DatabaseExternalPluggableDatabaseOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.NewDatabaseExternalPluggableDatabaseOperationsInsightsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseExternalPluggableDatabaseOperationsInsightsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.get"></a>

```go
func Get(index *f64) DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference <a name="DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.NewDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">OperationsInsightsConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">OperationsInsightsStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfig">DatabaseExternalPluggableDatabaseOperationsInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperationsInsightsConnectorId`<sup>Required</sup> <a name="OperationsInsightsConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```go
func OperationsInsightsConnectorId() *string
```

- *Type:* *string

---

##### `OperationsInsightsStatus`<sup>Required</sup> <a name="OperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```go
func OperationsInsightsStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseExternalPluggableDatabaseOperationsInsightsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseOperationsInsightsConfig">DatabaseExternalPluggableDatabaseOperationsInsightsConfig</a>

---


### DatabaseExternalPluggableDatabaseStackMonitoringConfigList <a name="DatabaseExternalPluggableDatabaseStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.NewDatabaseExternalPluggableDatabaseStackMonitoringConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseExternalPluggableDatabaseStackMonitoringConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.get"></a>

```go
func Get(index *f64) DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference <a name="DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.NewDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">StackMonitoringConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus">StackMonitoringStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfig">DatabaseExternalPluggableDatabaseStackMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StackMonitoringConnectorId`<sup>Required</sup> <a name="StackMonitoringConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```go
func StackMonitoringConnectorId() *string
```

- *Type:* *string

---

##### `StackMonitoringStatus`<sup>Required</sup> <a name="StackMonitoringStatus" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```go
func StackMonitoringStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseExternalPluggableDatabaseStackMonitoringConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseStackMonitoringConfig">DatabaseExternalPluggableDatabaseStackMonitoringConfig</a>

---


### DatabaseExternalPluggableDatabaseTimeoutsOutputReference <a name="DatabaseExternalPluggableDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabase"

databaseexternalpluggabledatabase.NewDatabaseExternalPluggableDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExternalPluggableDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabase.DatabaseExternalPluggableDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



