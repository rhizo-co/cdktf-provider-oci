# `kmsGeneratedKey` Submodule <a name="`kmsGeneratedKey` Submodule" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsGeneratedKey <a name="KmsGeneratedKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key oci_kms_generated_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

kmsgeneratedkey.NewKmsGeneratedKey(scope Construct, id *string, config KmsGeneratedKeyConfig) KmsGeneratedKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig">KmsGeneratedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig">KmsGeneratedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape">PutKeyShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetAssociatedData">ResetAssociatedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetLoggingContext">ResetLoggingContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyShape` <a name="PutKeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape"></a>

```go
func PutKeyShape(value KmsGeneratedKeyKeyShape)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts"></a>

```go
func PutTimeouts(value KmsGeneratedKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

---

##### `ResetAssociatedData` <a name="ResetAssociatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetAssociatedData"></a>

```go
func ResetAssociatedData()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetId"></a>

```go
func ResetId()
```

##### `ResetLoggingContext` <a name="ResetLoggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetLoggingContext"></a>

```go
func ResetLoggingContext()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

kmsgeneratedkey.KmsGeneratedKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

kmsgeneratedkey.KmsGeneratedKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

kmsgeneratedkey.KmsGeneratedKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

kmsgeneratedkey.KmsGeneratedKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsGeneratedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsGeneratedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmsGeneratedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.ciphertext">Ciphertext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShape">KeyShape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference">KmsGeneratedKeyKeyShapeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintextChecksum">PlaintextChecksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference">KmsGeneratedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedDataInput">AssociatedDataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpointInput">CryptoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKeyInput">IncludePlaintextKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShapeInput">KeyShapeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContextInput">LoggingContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedData">AssociatedData</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpoint">CryptoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKey">IncludePlaintextKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContext">LoggingContext</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.ciphertext"></a>

```go
func Ciphertext() *string
```

- *Type:* *string

---

##### `KeyShape`<sup>Required</sup> <a name="KeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShape"></a>

```go
func KeyShape() KmsGeneratedKeyKeyShapeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference">KmsGeneratedKeyKeyShapeOutputReference</a>

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `PlaintextChecksum`<sup>Required</sup> <a name="PlaintextChecksum" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintextChecksum"></a>

```go
func PlaintextChecksum() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeouts"></a>

```go
func Timeouts() KmsGeneratedKeyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference">KmsGeneratedKeyTimeoutsOutputReference</a>

---

##### `AssociatedDataInput`<sup>Optional</sup> <a name="AssociatedDataInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedDataInput"></a>

```go
func AssociatedDataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CryptoEndpointInput`<sup>Optional</sup> <a name="CryptoEndpointInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpointInput"></a>

```go
func CryptoEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludePlaintextKeyInput`<sup>Optional</sup> <a name="IncludePlaintextKeyInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKeyInput"></a>

```go
func IncludePlaintextKeyInput() interface{}
```

- *Type:* interface{}

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `KeyShapeInput`<sup>Optional</sup> <a name="KeyShapeInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShapeInput"></a>

```go
func KeyShapeInput() KmsGeneratedKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---

##### `LoggingContextInput`<sup>Optional</sup> <a name="LoggingContextInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContextInput"></a>

```go
func LoggingContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssociatedData`<sup>Required</sup> <a name="AssociatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedData"></a>

```go
func AssociatedData() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CryptoEndpoint`<sup>Required</sup> <a name="CryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpoint"></a>

```go
func CryptoEndpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludePlaintextKey`<sup>Required</sup> <a name="IncludePlaintextKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKey"></a>

```go
func IncludePlaintextKey() interface{}
```

- *Type:* interface{}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `LoggingContext`<sup>Required</sup> <a name="LoggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContext"></a>

```go
func LoggingContext() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsGeneratedKeyConfig <a name="KmsGeneratedKeyConfig" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

&kmsgeneratedkey.KmsGeneratedKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CryptoEndpoint: *string,
	IncludePlaintextKey: interface{},
	KeyId: *string,
	KeyShape: github.com/rhizo-co/cdktf-provider-oci-go/oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape,
	AssociatedData: *map[string]*string,
	Id: *string,
	LoggingContext: *map[string]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.cryptoEndpoint">CryptoEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.includePlaintextKey">IncludePlaintextKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyShape">KeyShape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | key_shape block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.associatedData">AssociatedData</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.loggingContext">LoggingContext</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CryptoEndpoint`<sup>Required</sup> <a name="CryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.cryptoEndpoint"></a>

```go
CryptoEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}.

---

##### `IncludePlaintextKey`<sup>Required</sup> <a name="IncludePlaintextKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.includePlaintextKey"></a>

```go
IncludePlaintextKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}.

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}.

---

##### `KeyShape`<sup>Required</sup> <a name="KeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyShape"></a>

```go
KeyShape KmsGeneratedKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

key_shape block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_shape KmsGeneratedKey#key_shape}

---

##### `AssociatedData`<sup>Optional</sup> <a name="AssociatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.associatedData"></a>

```go
AssociatedData *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingContext`<sup>Optional</sup> <a name="LoggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.loggingContext"></a>

```go
LoggingContext *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.timeouts"></a>

```go
Timeouts KmsGeneratedKeyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#timeouts KmsGeneratedKey#timeouts}

---

### KmsGeneratedKeyKeyShape <a name="KmsGeneratedKeyKeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

&kmsgeneratedkey.KmsGeneratedKeyKeyShape {
	Algorithm: *string,
	Length: *f64,
	CurveId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.length">Length</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.curveId">CurveId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}.

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}.

---

##### `CurveId`<sup>Optional</sup> <a name="CurveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.curveId"></a>

```go
CurveId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}.

---

### KmsGeneratedKeyTimeouts <a name="KmsGeneratedKeyTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

&kmsgeneratedkey.KmsGeneratedKeyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsGeneratedKeyKeyShapeOutputReference <a name="KmsGeneratedKeyKeyShapeOutputReference" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

kmsgeneratedkey.NewKmsGeneratedKeyKeyShapeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsGeneratedKeyKeyShapeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resetCurveId">ResetCurveId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurveId` <a name="ResetCurveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resetCurveId"></a>

```go
func ResetCurveId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveIdInput">CurveIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveId">CurveId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `CurveIdInput`<sup>Optional</sup> <a name="CurveIdInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveIdInput"></a>

```go
func CurveIdInput() *string
```

- *Type:* *string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `CurveId`<sup>Required</sup> <a name="CurveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveId"></a>

```go
func CurveId() *string
```

- *Type:* *string

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsGeneratedKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---


### KmsGeneratedKeyTimeoutsOutputReference <a name="KmsGeneratedKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsgeneratedkey"

kmsgeneratedkey.NewKmsGeneratedKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsGeneratedKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



