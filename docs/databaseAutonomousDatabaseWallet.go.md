# `databaseAutonomousDatabaseWallet` Submodule <a name="`databaseAutonomousDatabaseWallet` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseWallet <a name="DatabaseAutonomousDatabaseWallet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet oci_database_autonomous_database_wallet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasewallet"

databaseautonomousdatabasewallet.NewDatabaseAutonomousDatabaseWallet(scope Construct, id *string, config DatabaseAutonomousDatabaseWalletConfig) DatabaseAutonomousDatabaseWallet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig">DatabaseAutonomousDatabaseWalletConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig">DatabaseAutonomousDatabaseWalletConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetBase64EncodeContent">ResetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetGenerateType">ResetGenerateType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetIsRegional">ResetIsRegional</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseAutonomousDatabaseWalletTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a>

---

##### `ResetBase64EncodeContent` <a name="ResetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetBase64EncodeContent"></a>

```go
func ResetBase64EncodeContent()
```

##### `ResetGenerateType` <a name="ResetGenerateType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetGenerateType"></a>

```go
func ResetGenerateType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetId"></a>

```go
func ResetId()
```

##### `ResetIsRegional` <a name="ResetIsRegional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetIsRegional"></a>

```go
func ResetIsRegional()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseWallet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasewallet"

databaseautonomousdatabasewallet.DatabaseAutonomousDatabaseWallet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasewallet"

databaseautonomousdatabasewallet.DatabaseAutonomousDatabaseWallet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasewallet"

databaseautonomousdatabasewallet.DatabaseAutonomousDatabaseWallet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasewallet"

databaseautonomousdatabasewallet.DatabaseAutonomousDatabaseWallet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseWallet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseAutonomousDatabaseWallet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseAutonomousDatabaseWallet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseWallet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference">DatabaseAutonomousDatabaseWalletTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.base64EncodeContentInput">Base64EncodeContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.generateTypeInput">GenerateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.isRegionalInput">IsRegionalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.generateType">GenerateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.isRegional">IsRegional</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.password">Password</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.timeouts"></a>

```go
func Timeouts() DatabaseAutonomousDatabaseWalletTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference">DatabaseAutonomousDatabaseWalletTimeoutsOutputReference</a>

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.autonomousDatabaseIdInput"></a>

```go
func AutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `Base64EncodeContentInput`<sup>Optional</sup> <a name="Base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.base64EncodeContentInput"></a>

```go
func Base64EncodeContentInput() interface{}
```

- *Type:* interface{}

---

##### `GenerateTypeInput`<sup>Optional</sup> <a name="GenerateTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.generateTypeInput"></a>

```go
func GenerateTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsRegionalInput`<sup>Optional</sup> <a name="IsRegionalInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.isRegionalInput"></a>

```go
func IsRegionalInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `Base64EncodeContent`<sup>Required</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.base64EncodeContent"></a>

```go
func Base64EncodeContent() interface{}
```

- *Type:* interface{}

---

##### `GenerateType`<sup>Required</sup> <a name="GenerateType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.generateType"></a>

```go
func GenerateType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRegional`<sup>Required</sup> <a name="IsRegional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.isRegional"></a>

```go
func IsRegional() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseWalletConfig <a name="DatabaseAutonomousDatabaseWalletConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasewallet"

&databaseautonomousdatabasewallet.DatabaseAutonomousDatabaseWalletConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousDatabaseId: *string,
	Password: *string,
	Base64EncodeContent: interface{},
	GenerateType: *string,
	Id: *string,
	IsRegional: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#autonomous_database_id DatabaseAutonomousDatabaseWallet#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#password DatabaseAutonomousDatabaseWallet#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#base64_encode_content DatabaseAutonomousDatabaseWallet#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.generateType">GenerateType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#generate_type DatabaseAutonomousDatabaseWallet#generate_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#id DatabaseAutonomousDatabaseWallet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.isRegional">IsRegional</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#is_regional DatabaseAutonomousDatabaseWallet#is_regional}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.autonomousDatabaseId"></a>

```go
AutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#autonomous_database_id DatabaseAutonomousDatabaseWallet#autonomous_database_id}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#password DatabaseAutonomousDatabaseWallet#password}.

---

##### `Base64EncodeContent`<sup>Optional</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.base64EncodeContent"></a>

```go
Base64EncodeContent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#base64_encode_content DatabaseAutonomousDatabaseWallet#base64_encode_content}.

---

##### `GenerateType`<sup>Optional</sup> <a name="GenerateType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.generateType"></a>

```go
GenerateType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#generate_type DatabaseAutonomousDatabaseWallet#generate_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#id DatabaseAutonomousDatabaseWallet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRegional`<sup>Optional</sup> <a name="IsRegional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.isRegional"></a>

```go
IsRegional interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#is_regional DatabaseAutonomousDatabaseWallet#is_regional}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.timeouts"></a>

```go
Timeouts DatabaseAutonomousDatabaseWalletTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#timeouts DatabaseAutonomousDatabaseWallet#timeouts}

---

### DatabaseAutonomousDatabaseWalletTimeouts <a name="DatabaseAutonomousDatabaseWalletTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasewallet"

&databaseautonomousdatabasewallet.DatabaseAutonomousDatabaseWalletTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#create DatabaseAutonomousDatabaseWallet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#delete DatabaseAutonomousDatabaseWallet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#update DatabaseAutonomousDatabaseWallet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#create DatabaseAutonomousDatabaseWallet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#delete DatabaseAutonomousDatabaseWallet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#update DatabaseAutonomousDatabaseWallet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseWalletTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseWalletTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousdatabasewallet"

databaseautonomousdatabasewallet.NewDatabaseAutonomousDatabaseWalletTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseAutonomousDatabaseWalletTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


