# `kmsKeyVersion` Submodule <a name="`kmsKeyVersion` Submodule" id="rhizo-co-terraform-provider-oci.kmsKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyVersion <a name="KmsKeyVersion" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version oci_kms_key_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.NewKmsKeyVersion(scope Construct, id *string, config KmsKeyVersionConfig) KmsKeyVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig">KmsKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig">KmsKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetExternalKeyVersionId">ResetExternalKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetTimeOfDeletion">ResetTimeOfDeletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.putTimeouts"></a>

```go
func PutTimeouts(value KmsKeyVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts">KmsKeyVersionTimeouts</a>

---

##### `ResetExternalKeyVersionId` <a name="ResetExternalKeyVersionId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetExternalKeyVersionId"></a>

```go
func ResetExternalKeyVersionId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeOfDeletion` <a name="ResetTimeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetTimeOfDeletion"></a>

```go
func ResetTimeOfDeletion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.KmsKeyVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.KmsKeyVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.KmsKeyVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.KmsKeyVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmsKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmsKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.externalKeyReferenceDetails">ExternalKeyReferenceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList">KmsKeyVersionExternalKeyReferenceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.isAutoRotated">IsAutoRotated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.isPrimary">IsPrimary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.keyVersionId">KeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.replicaDetails">ReplicaDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList">KmsKeyVersionReplicaDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.restoredFromKeyId">RestoredFromKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.restoredFromKeyVersionId">RestoredFromKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference">KmsKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.externalKeyVersionIdInput">ExternalKeyVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.managementEndpointInput">ManagementEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeOfDeletionInput">TimeOfDeletionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.externalKeyVersionId">ExternalKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.managementEndpoint">ManagementEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ExternalKeyReferenceDetails`<sup>Required</sup> <a name="ExternalKeyReferenceDetails" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.externalKeyReferenceDetails"></a>

```go
func ExternalKeyReferenceDetails() KmsKeyVersionExternalKeyReferenceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList">KmsKeyVersionExternalKeyReferenceDetailsList</a>

---

##### `IsAutoRotated`<sup>Required</sup> <a name="IsAutoRotated" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.isAutoRotated"></a>

```go
func IsAutoRotated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.isPrimary"></a>

```go
func IsPrimary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyVersionId`<sup>Required</sup> <a name="KeyVersionId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.keyVersionId"></a>

```go
func KeyVersionId() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `ReplicaDetails`<sup>Required</sup> <a name="ReplicaDetails" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.replicaDetails"></a>

```go
func ReplicaDetails() KmsKeyVersionReplicaDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList">KmsKeyVersionReplicaDetailsList</a>

---

##### `RestoredFromKeyId`<sup>Required</sup> <a name="RestoredFromKeyId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.restoredFromKeyId"></a>

```go
func RestoredFromKeyId() *string
```

- *Type:* *string

---

##### `RestoredFromKeyVersionId`<sup>Required</sup> <a name="RestoredFromKeyVersionId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.restoredFromKeyVersionId"></a>

```go
func RestoredFromKeyVersionId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeouts"></a>

```go
func Timeouts() KmsKeyVersionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference">KmsKeyVersionTimeoutsOutputReference</a>

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `ExternalKeyVersionIdInput`<sup>Optional</sup> <a name="ExternalKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.externalKeyVersionIdInput"></a>

```go
func ExternalKeyVersionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `ManagementEndpointInput`<sup>Optional</sup> <a name="ManagementEndpointInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.managementEndpointInput"></a>

```go
func ManagementEndpointInput() *string
```

- *Type:* *string

---

##### `TimeOfDeletionInput`<sup>Optional</sup> <a name="TimeOfDeletionInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeOfDeletionInput"></a>

```go
func TimeOfDeletionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalKeyVersionId`<sup>Required</sup> <a name="ExternalKeyVersionId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.externalKeyVersionId"></a>

```go
func ExternalKeyVersionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.managementEndpoint"></a>

```go
func ManagementEndpoint() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyVersionConfig <a name="KmsKeyVersionConfig" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

&kmskeyversion.KmsKeyVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyId: *string,
	ManagementEndpoint: *string,
	ExternalKeyVersionId: *string,
	Id: *string,
	TimeOfDeletion: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.kmsKeyVersion.KmsKeyVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#key_id KmsKeyVersion#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.managementEndpoint">ManagementEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#management_endpoint KmsKeyVersion#management_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.externalKeyVersionId">ExternalKeyVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#external_key_version_id KmsKeyVersion#external_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#id KmsKeyVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#time_of_deletion KmsKeyVersion#time_of_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts">KmsKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#key_id KmsKeyVersion#key_id}.

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.managementEndpoint"></a>

```go
ManagementEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#management_endpoint KmsKeyVersion#management_endpoint}.

---

##### `ExternalKeyVersionId`<sup>Optional</sup> <a name="ExternalKeyVersionId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.externalKeyVersionId"></a>

```go
ExternalKeyVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#external_key_version_id KmsKeyVersion#external_key_version_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#id KmsKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeOfDeletion`<sup>Optional</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.timeOfDeletion"></a>

```go
TimeOfDeletion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#time_of_deletion KmsKeyVersion#time_of_deletion}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionConfig.property.timeouts"></a>

```go
Timeouts KmsKeyVersionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts">KmsKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#timeouts KmsKeyVersion#timeouts}

---

### KmsKeyVersionExternalKeyReferenceDetails <a name="KmsKeyVersionExternalKeyReferenceDetails" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

&kmskeyversion.KmsKeyVersionExternalKeyReferenceDetails {

}
```


### KmsKeyVersionReplicaDetails <a name="KmsKeyVersionReplicaDetails" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

&kmskeyversion.KmsKeyVersionReplicaDetails {

}
```


### KmsKeyVersionTimeouts <a name="KmsKeyVersionTimeouts" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

&kmskeyversion.KmsKeyVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#create KmsKeyVersion#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#delete KmsKeyVersion#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#update KmsKeyVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#create KmsKeyVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#delete KmsKeyVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key_version#update KmsKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsKeyVersionExternalKeyReferenceDetailsList <a name="KmsKeyVersionExternalKeyReferenceDetailsList" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.NewKmsKeyVersionExternalKeyReferenceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsKeyVersionExternalKeyReferenceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.get"></a>

```go
func Get(index *f64) KmsKeyVersionExternalKeyReferenceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsKeyVersionExternalKeyReferenceDetailsOutputReference <a name="KmsKeyVersionExternalKeyReferenceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.NewKmsKeyVersionExternalKeyReferenceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsKeyVersionExternalKeyReferenceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.externalKeyId">ExternalKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.externalKeyVersionId">ExternalKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetails">KmsKeyVersionExternalKeyReferenceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalKeyId`<sup>Required</sup> <a name="ExternalKeyId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.externalKeyId"></a>

```go
func ExternalKeyId() *string
```

- *Type:* *string

---

##### `ExternalKeyVersionId`<sup>Required</sup> <a name="ExternalKeyVersionId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.externalKeyVersionId"></a>

```go
func ExternalKeyVersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsKeyVersionExternalKeyReferenceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionExternalKeyReferenceDetails">KmsKeyVersionExternalKeyReferenceDetails</a>

---


### KmsKeyVersionReplicaDetailsList <a name="KmsKeyVersionReplicaDetailsList" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.NewKmsKeyVersionReplicaDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsKeyVersionReplicaDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.get"></a>

```go
func Get(index *f64) KmsKeyVersionReplicaDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsKeyVersionReplicaDetailsOutputReference <a name="KmsKeyVersionReplicaDetailsOutputReference" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.NewKmsKeyVersionReplicaDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsKeyVersionReplicaDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.property.replicationId">ReplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetails">KmsKeyVersionReplicaDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationId`<sup>Required</sup> <a name="ReplicationId" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.property.replicationId"></a>

```go
func ReplicationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsKeyVersionReplicaDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionReplicaDetails">KmsKeyVersionReplicaDetails</a>

---


### KmsKeyVersionTimeoutsOutputReference <a name="KmsKeyVersionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmskeyversion"

kmskeyversion.NewKmsKeyVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsKeyVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsKeyVersion.KmsKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


