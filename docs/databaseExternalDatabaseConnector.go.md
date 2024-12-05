# `databaseExternalDatabaseConnector` Submodule <a name="`databaseExternalDatabaseConnector` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalDatabaseConnector <a name="DatabaseExternalDatabaseConnector" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector oci_database_external_database_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

databaseexternaldatabaseconnector.NewDatabaseExternalDatabaseConnector(scope Construct, id *string, config DatabaseExternalDatabaseConnectorConfig) DatabaseExternalDatabaseConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig">DatabaseExternalDatabaseConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig">DatabaseExternalDatabaseConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionCredentials">PutConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionString">PutConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetConnectorType">ResetConnectorType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionCredentials` <a name="PutConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionCredentials"></a>

```go
func PutConnectionCredentials(value DatabaseExternalDatabaseConnectorConnectionCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

---

##### `PutConnectionString` <a name="PutConnectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionString"></a>

```go
func PutConnectionString(value DatabaseExternalDatabaseConnectorConnectionString)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putConnectionString.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseExternalDatabaseConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a>

---

##### `ResetConnectorType` <a name="ResetConnectorType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetConnectorType"></a>

```go
func ResetConnectorType()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalDatabaseConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

databaseexternaldatabaseconnector.DatabaseExternalDatabaseConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

databaseexternaldatabaseconnector.DatabaseExternalDatabaseConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

databaseexternaldatabaseconnector.DatabaseExternalDatabaseConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

databaseexternaldatabaseconnector.DatabaseExternalDatabaseConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseExternalDatabaseConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseExternalDatabaseConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseExternalDatabaseConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalDatabaseConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference">DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionStatus">ConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference">DatabaseExternalDatabaseConnectorConnectionStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeConnectionStatusLastUpdated">TimeConnectionStatusLastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference">DatabaseExternalDatabaseConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionCredentialsInput">ConnectionCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionStringInput">ConnectionStringInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorAgentIdInput">ConnectorAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.externalDatabaseIdInput">ExternalDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorAgentId">ConnectorAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.externalDatabaseId">ExternalDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionCredentials"></a>

```go
func ConnectionCredentials() DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference">DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference</a>

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionStatus"></a>

```go
func ConnectionStatus() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionString"></a>

```go
func ConnectionString() DatabaseExternalDatabaseConnectorConnectionStringOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference">DatabaseExternalDatabaseConnectorConnectionStringOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeConnectionStatusLastUpdated`<sup>Required</sup> <a name="TimeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeConnectionStatusLastUpdated"></a>

```go
func TimeConnectionStatusLastUpdated() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeouts"></a>

```go
func Timeouts() DatabaseExternalDatabaseConnectorTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference">DatabaseExternalDatabaseConnectorTimeoutsOutputReference</a>

---

##### `ConnectionCredentialsInput`<sup>Optional</sup> <a name="ConnectionCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionCredentialsInput"></a>

```go
func ConnectionCredentialsInput() DatabaseExternalDatabaseConnectorConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectionStringInput"></a>

```go
func ConnectionStringInput() DatabaseExternalDatabaseConnectorConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

---

##### `ConnectorAgentIdInput`<sup>Optional</sup> <a name="ConnectorAgentIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorAgentIdInput"></a>

```go
func ConnectorAgentIdInput() *string
```

- *Type:* *string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorTypeInput"></a>

```go
func ConnectorTypeInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalDatabaseIdInput`<sup>Optional</sup> <a name="ExternalDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.externalDatabaseIdInput"></a>

```go
func ExternalDatabaseIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectorAgentId`<sup>Required</sup> <a name="ConnectorAgentId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorAgentId"></a>

```go
func ConnectorAgentId() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalDatabaseId`<sup>Required</sup> <a name="ExternalDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.externalDatabaseId"></a>

```go
func ExternalDatabaseId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalDatabaseConnectorConfig <a name="DatabaseExternalDatabaseConnectorConfig" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

&databaseexternaldatabaseconnector.DatabaseExternalDatabaseConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionCredentials: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials,
	ConnectionString: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString,
	ConnectorAgentId: *string,
	DisplayName: *string,
	ExternalDatabaseId: *string,
	ConnectorType: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a></code> | connection_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a></code> | connection_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectorAgentId">ConnectorAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_agent_id DatabaseExternalDatabaseConnector#connector_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#display_name DatabaseExternalDatabaseConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.externalDatabaseId">ExternalDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#external_database_id DatabaseExternalDatabaseConnector#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectorType">ConnectorType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_type DatabaseExternalDatabaseConnector#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#defined_tags DatabaseExternalDatabaseConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#freeform_tags DatabaseExternalDatabaseConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#id DatabaseExternalDatabaseConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectionCredentials"></a>

```go
ConnectionCredentials DatabaseExternalDatabaseConnectorConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

connection_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connection_credentials DatabaseExternalDatabaseConnector#connection_credentials}

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectionString"></a>

```go
ConnectionString DatabaseExternalDatabaseConnectorConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connection_string DatabaseExternalDatabaseConnector#connection_string}

---

##### `ConnectorAgentId`<sup>Required</sup> <a name="ConnectorAgentId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectorAgentId"></a>

```go
ConnectorAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_agent_id DatabaseExternalDatabaseConnector#connector_agent_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#display_name DatabaseExternalDatabaseConnector#display_name}.

---

##### `ExternalDatabaseId`<sup>Required</sup> <a name="ExternalDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.externalDatabaseId"></a>

```go
ExternalDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#external_database_id DatabaseExternalDatabaseConnector#external_database_id}.

---

##### `ConnectorType`<sup>Optional</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.connectorType"></a>

```go
ConnectorType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#connector_type DatabaseExternalDatabaseConnector#connector_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#defined_tags DatabaseExternalDatabaseConnector#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#freeform_tags DatabaseExternalDatabaseConnector#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#id DatabaseExternalDatabaseConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConfig.property.timeouts"></a>

```go
Timeouts DatabaseExternalDatabaseConnectorTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts">DatabaseExternalDatabaseConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#timeouts DatabaseExternalDatabaseConnector#timeouts}

---

### DatabaseExternalDatabaseConnectorConnectionCredentials <a name="DatabaseExternalDatabaseConnectorConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

&databaseexternaldatabaseconnector.DatabaseExternalDatabaseConnectorConnectionCredentials {
	CredentialName: *string,
	CredentialType: *string,
	Password: *string,
	Role: *string,
	SslSecretId: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.credentialName">CredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#credential_name DatabaseExternalDatabaseConnector#credential_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.credentialType">CredentialType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#credential_type DatabaseExternalDatabaseConnector#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#password DatabaseExternalDatabaseConnector#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#role DatabaseExternalDatabaseConnector#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.sslSecretId">SslSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#ssl_secret_id DatabaseExternalDatabaseConnector#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#username DatabaseExternalDatabaseConnector#username}. |

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.credentialName"></a>

```go
CredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#credential_name DatabaseExternalDatabaseConnector#credential_name}.

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#credential_type DatabaseExternalDatabaseConnector#credential_type}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#password DatabaseExternalDatabaseConnector#password}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#role DatabaseExternalDatabaseConnector#role}.

---

##### `SslSecretId`<sup>Optional</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.sslSecretId"></a>

```go
SslSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#ssl_secret_id DatabaseExternalDatabaseConnector#ssl_secret_id}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#username DatabaseExternalDatabaseConnector#username}.

---

### DatabaseExternalDatabaseConnectorConnectionString <a name="DatabaseExternalDatabaseConnectorConnectionString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

&databaseexternaldatabaseconnector.DatabaseExternalDatabaseConnectorConnectionString {
	Hostname: *string,
	Port: *f64,
	Protocol: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#hostname DatabaseExternalDatabaseConnector#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#port DatabaseExternalDatabaseConnector#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#protocol DatabaseExternalDatabaseConnector#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#service DatabaseExternalDatabaseConnector#service}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#hostname DatabaseExternalDatabaseConnector#hostname}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#port DatabaseExternalDatabaseConnector#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#protocol DatabaseExternalDatabaseConnector#protocol}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#service DatabaseExternalDatabaseConnector#service}.

---

### DatabaseExternalDatabaseConnectorTimeouts <a name="DatabaseExternalDatabaseConnectorTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

&databaseexternaldatabaseconnector.DatabaseExternalDatabaseConnectorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#create DatabaseExternalDatabaseConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#delete DatabaseExternalDatabaseConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#update DatabaseExternalDatabaseConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#create DatabaseExternalDatabaseConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#delete DatabaseExternalDatabaseConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_database_connector#update DatabaseExternalDatabaseConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference <a name="DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

databaseexternaldatabaseconnector.NewDatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetCredentialName">ResetCredentialName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetSslSecretId">ResetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialName` <a name="ResetCredentialName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetCredentialName"></a>

```go
func ResetCredentialName()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetCredentialType"></a>

```go
func ResetCredentialType()
```

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetRole"></a>

```go
func ResetRole()
```

##### `ResetSslSecretId` <a name="ResetSslSecretId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetSslSecretId"></a>

```go
func ResetSslSecretId()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialNameInput">CredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.sslSecretIdInput">SslSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialNameInput"></a>

```go
func CredentialNameInput() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SslSecretIdInput`<sup>Optional</sup> <a name="SslSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.sslSecretIdInput"></a>

```go
func SslSecretIdInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialName"></a>

```go
func CredentialName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.sslSecretId"></a>

```go
func SslSecretId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseExternalDatabaseConnectorConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionCredentials">DatabaseExternalDatabaseConnectorConnectionCredentials</a>

---


### DatabaseExternalDatabaseConnectorConnectionStringOutputReference <a name="DatabaseExternalDatabaseConnectorConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

databaseexternaldatabaseconnector.NewDatabaseExternalDatabaseConnectorConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExternalDatabaseConnectorConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseExternalDatabaseConnectorConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorConnectionString">DatabaseExternalDatabaseConnectorConnectionString</a>

---


### DatabaseExternalDatabaseConnectorTimeoutsOutputReference <a name="DatabaseExternalDatabaseConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternaldatabaseconnector"

databaseexternaldatabaseconnector.NewDatabaseExternalDatabaseConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExternalDatabaseConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalDatabaseConnector.DatabaseExternalDatabaseConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



